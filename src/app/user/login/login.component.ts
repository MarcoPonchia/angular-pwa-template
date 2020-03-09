import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import * as UserActions from "../store/user.actions";
import * as UserSelectors from "../store/user.selectors";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginErrors$: Observable<{ [name: string]: string }>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.loginErrors$ = this.store.select(UserSelectors.errors);
    this.loginForm = new FormGroup({
      email: new FormControl(undefined, [
        Validators.email,
        Validators.required
      ]),
      username: new FormControl(undefined, Validators.required)
    });
  }

  onSubmit() {
    this.store.dispatch(UserActions.login({ user: this.loginForm.value }));
  }
}
