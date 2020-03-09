import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-topics",
  templateUrl: "./topics.component.html",
  styleUrls: ["./topics.component.scss"]
})
export class TopicsComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    // this.user$ = this.store.select(Selectors.userModel);
  }
}
