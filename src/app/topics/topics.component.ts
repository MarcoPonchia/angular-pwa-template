import { Component, OnInit, HostListener } from "@angular/core";
import * as Actions from "./store/topics.actions";
import * as UserSelectors from "../user/store/user.selectors";
import { Store } from "@ngrx/store";
import { take, tap, map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-topics",
  templateUrl: "./topics.component.html",
  styleUrls: ["./topics.component.scss"]
})
export class TopicsComponent implements OnInit {
  @HostListener("window:focus", ["$event"])
  onFocus(event: any): void {
    this.store.dispatch(Actions.fakeFetchTopic());
  }

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    // FIXME: to remove use guard instead
    this.store
      .select(UserSelectors.companyId)
      .pipe(
        take(1),
        tap(state => {
          console.log("here");
          if (!state) {
            this.router.navigate(["/user", "login"]);
          }
        })
      )
      .subscribe();
    this.store.dispatch(Actions.fetchTopics());
  }
}
