import { createSelector } from "@ngrx/store";

import { State } from "./topics.reducer";
import { Topic } from "src/app/shared/models/topic.model";

const root = (state: any): any => state;

/**
 * @return the topics data contained in the store
 */
export const topicsState = createSelector(
  root,
  (state: any): State => state.user
);

/**
 * @return topic list contained in the store
 */
export const topics = createSelector(
  topicsState,
  (state: State): Topic[] => state.list
);

/**
 * @return true if topics are alined with BE
 */
export const isAligned = createSelector(
  topicsState,
  (state: State): boolean => state.aligned
);
