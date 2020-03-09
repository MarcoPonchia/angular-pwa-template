import { createAction, props } from "@ngrx/store";
import { User } from "src/app/shared/models/user.model";

export const login = createAction("[User] Login", props<{ user: User }>());

export const confirmLogin = createAction(
  "[User] Confirm login",
  props<{ user: User }>()
);

export const rejectLogin = createAction(
  "[User] Reject login",
  props<{ errors: { [name: string]: string } }>()
);

export const logout = createAction("[User] Logout");

export const setUser = createAction("[User] Set User", props<{ user: User }>());

export const fetchUser = createAction(
  "[User] Fetch User",
  props<{ id: string }>()
);

export const updateUser = createAction(
  "[User] Update User",
  props<{ user: User }>()
);
