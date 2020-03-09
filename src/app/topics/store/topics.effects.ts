import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as TopicsActions from "./topics.actions";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";
import { Topic } from "src/app/shared/models/topic.model";
import { of } from "rxjs";

@Injectable()
export class TopicsEffects {
  constructor(
    private store: Store<any>,
    private router: Router,
    private actions$: Actions,
    private httpClient: HttpClient
  ) {}

  @Effect()
  fetchTopics = this.actions$.pipe(
    ofType(TopicsActions.fetchTopics),
    switchMap(action => {
      return this.httpClient.get(`${environment.apiPath}/topics`);
    }),
    map((response: any) => {
      return TopicsActions.setTopics({
        topics: response.map(t => new Topic(t)) || []
      });
    }),
    catchError((err, caught) => {
      return caught;
    })
  );

  @Effect()
  createTopic = this.actions$.pipe(
    ofType(TopicsActions.createTopic),
    mergeMap(action => {
      return of(action.topic);
      // TODO: fake http post
      return this.httpClient.post(
        `${environment.apiPath}/topics`,
        action.topic
      );
    }),
    map((response: any) => {
      return TopicsActions.setTopic({
        topic: new Topic(response)
      });
    }),
    catchError((err, caught) => {
      return caught;
    })
  );

  @Effect()
  UpdateTopic = this.actions$.pipe(
    ofType(TopicsActions.updateTopic),
    switchMap(action => {
      return of(action.topic);
      return this.httpClient.patch(
        `${environment.apiPath}/topics/${action.topic.id}`,
        action.topic
      );
    }),
    map((response: any) => {
      return TopicsActions.setTopic({
        topic: new Topic(response)
      });
    }),
    catchError((err, caught) => {
      return caught;
    })
  );

  @Effect()
  DeleteTopic = this.actions$.pipe(
    ofType(TopicsActions.deleteTopic),
    mergeMap(action => {
      return (
        of({ res: true })
          // return this.httpClient.delete(
          //   `${environment.apiPath}/topics/${action.topicId}`
          // )
          .pipe(map(() => action.topicId))
      );
    }),
    map(topicId => {
      return TopicsActions.removeTopic({ topicId });
    }),
    catchError((err, caught) => {
      return caught;
    })
  );
}
