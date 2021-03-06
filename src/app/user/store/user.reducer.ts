import * as UserActions from "./user.actions";
import { Action, createReducer, on } from "@ngrx/store";
import { User } from "src/app/shared/models/user.model";

export interface State {
  model: User;
  errors: { [name: string]: string };
  aligned: boolean;
}

const initialState: State = {
  model: undefined,
  errors: undefined,
  aligned: true
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.logout, state => {
    return {
      ...initialState
    };
  }),
  on(UserActions.confirmLogin, (state, { user }) => {
    return {
      ...state,
      model: user,
      errors: undefined,
      aligned: true
    };
  }),
  on(UserActions.fetchUser, (state, { id }) => {
    return {
      ...state,
      model: undefined,
      errors: undefined,
      aligned: false
    };
  }),
  on(UserActions.setUser, (state, { user }) => {
    return {
      ...state,
      model: user,
      errors: undefined,
      aligned: true
    };
  }),
  on(UserActions.rejectLogin, (state, { errors }) => {
    return {
      ...state,
      errors,
      aligned: true
    };
  }),
  on(UserActions.updateUser, (state, { user }) => {
    return {
      ...state,
      aligned: false
    };
  })
);

// export function reducer(state: State | undefined, action: Action) {
//   return userReducer(state, action);
// }
