import { createAction, props } from "@ngrx/store";
import { Topic } from "src/app/shared/models/topic.model";

export const fetchTopics = createAction("[Topics] Fetch Topics");

export const setTopics = createAction(
  "[Topics] Set Topics",
  props<{ topics: Topic[] }>()
);

export const createTopic = createAction(
  "[Topics] Create Topic",
  props<{ topic: Topic }>()
);

export const updateTopic = createAction(
  "[Topics] Update Topic",
  props<{ topic: Topic }>()
);

export const setTopic = createAction(
  "[Topics] Set Topic",
  props<{ topic: Topic }>()
);

export const deleteTopic = createAction(
  "[Topics] Delete Topic",
  props<{ topicId: string }>()
);

export const removeTopic = createAction(
  "[Topics] Remove Topic",
  props<{ topicId: string }>()
);

// TODO: remove fake fetch
export const fakeFetchTopic = createAction("[Topics]  Fake Fetch Topic");
