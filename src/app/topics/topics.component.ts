import { Component, OnInit } from "@angular/core";
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
