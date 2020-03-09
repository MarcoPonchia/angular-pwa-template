import { topicsReducer } from "./topics/store/topics.reducer";
import { ActionReducerMap } from "@ngrx/store";
import { userReducer } from "./user/store/user.reducer";

export const reducers: ActionReducerMap<any> = {
  user: userReducer,
  topics: topicsReducer
};
