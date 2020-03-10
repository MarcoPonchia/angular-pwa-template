import { createSelector } from "@ngrx/store";

import { State } from "./user.reducer";
import { User } from "../../shared/models/user.model";

const root = (state: any): any => state;

/**
 * @return the user data contained in the store
 */
export const userState = createSelector(
  root,
  (state: any): State => state.user
);

/**
 * @return user model contained in the store
 */
export const userModel = createSelector(
  userState,
  (state: State): User => state.model
);

/**
 * @return user errors of login contained in the store
 */
export const errors = createSelector(
  userState,
  (state: State): { [name: string]: string } => state.errors
);

/**
 * @return user companyId of current user contained in the store
 */
export const companyId = createSelector(
  userModel,
  (state: User): string => state && state.companyId
);

/**
 * @return true if warehouses are alined with BE
 */
export const isAligned = createSelector(
  userState,
  (state: State): boolean => state.aligned
);
