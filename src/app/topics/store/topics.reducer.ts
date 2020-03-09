import * as TopicsActions from "./topics.actions";
import { Action, createReducer, on } from "@ngrx/store";
import { Topic } from "src/app/shared/models/topic.model";

export interface State {
  list: Topic[];
  aligned: boolean;
}

const initialState: State = {
  list: [],
  aligned: true
};

export const topicsReducer = createReducer(
  initialState,
  on(TopicsActions.fetchTopics, state => {
    return {
      ...state,
      aligned: false
    };
  }),
  on(TopicsActions.setTopics, (state, { topics }) => {
    return {
      ...state,
      topics: topics,
      aligned: true
    };
  }),
  on(TopicsActions.createTopic, (state, { topic }) => {
    const newTopic: Topic = topic;
    newTopic.markAsMisaligned();
    return {
      ...state,
      list: [newTopic, ...state.list]
    };
  }),
  on(TopicsActions.setTopic, (state, { topic }) => {
    const topicIndex = state.list.findIndex(item => item.id === topic.id);
    const updatedTopicsList =
      topicIndex === -1
        ? [topic, ...state.list.filter(t => t.id)]
        : state.list.map(item => (item.id === topic.id ? topic : item));
    return {
      ...state,
      list: updatedTopicsList,
      aligned: true
    };
  }),
  on(TopicsActions.deleteTopic, (state, { topicId }) => {
    const misalignedList = state.list.map(item => {
      if (item.id === topicId) {
        const delitingTopic = item;
        delitingTopic.markAsMisaligned();
        return delitingTopic;
      }
      return item;
    });
    return {
      ...state,
      list: misalignedList
    };
  }),
  on(TopicsActions.removeTopic, (state, { topicId }) => {
    return {
      ...state,
      list: [...state.list.filter(item => item.id !== topicId)],
      aligned: true
    };
  })
);
