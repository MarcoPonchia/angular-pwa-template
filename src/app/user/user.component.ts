import { Component, OnInit } from "@angular/core";
import * as Selectors from "./store/user.selectors";
import { User } from "../shared/models/user.model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.user$ = this.store.select(Selectors.userModel);
  }
}
