import { Component, OnInit } from "@angular/core";
import * as Selectors from "../store/user.selectors";
import { User } from "../../shared/models/user.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-show-user",
  templateUrl: "./show-user.component.html",
  styleUrls: ["./show-user.component.scss"]
})
export class ShowUserComponent implements OnInit {
  user$: Observable<User>;
  aligned$: Observable<boolean>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.aligned$ = this.store.select(Selectors.isAligned);
    this.user$ = this.store.select(Selectors.userModel);
  }
}
