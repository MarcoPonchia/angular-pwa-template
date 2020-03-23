import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  withLatestFrom
} from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as TopicsActions from "./topics.actions";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";
import { Topic } from "src/app/shared/models/topic.model";
import { of } from "rxjs";
import * as UserSelectors from "../../user/store/user.selectors";

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
    withLatestFrom(this.store.select(UserSelectors.companyId)),
    switchMap(([action, companyId]) => {
      console.log("companyId", companyId);
      let params = new HttpParams();
      params = params.append("companyId", companyId);
      return this.httpClient.get(`${environment.apiPath}/topics`, { params });
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

  // TODO: Only mock
  @Effect()
  fakeFetchTopics = this.actions$.pipe(
    ofType(TopicsActions.fakeFetchTopic),
    withLatestFrom(this.store.select(UserSelectors.companyId)),
    switchMap(([action, companyId]) => {
      console.log("companyId", companyId);
      let params = new HttpParams();
      params = params.append("companyId", companyId);
      return this.httpClient.get(`${environment.apiPath}/topics`, { params });
    }),
    map((response: any) => {
      console.log("fake fetch topics");
      const newTopic = new Topic({
        id: "t55",
        title: "something",
        companyId: "c1",
        posts: [
          {
            authorId: "u1",
            subtitle: "test",
            description:
              "aliquet non hendrerit ut, sollicitudin vitae nisl. Mauris lacinia, eros porttitor suscipit mollis, leo turpis consectetur ex, sit amet tristique risus est id ex. Duis et efficitur tortor. Cras et metus enim. Donec viverra urna nec semper pellentesque. Fusce eros nisl, scelerisque eu leo et, rutrum rutrum tellus. Aliquam id justo enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula purus erat, sed viverra lectus molestie et. Duis diam ante"
          }
        ]
      });
      return TopicsActions.setTopics({
        topics: [...response.map(t => new Topic(t)), newTopic] || []
      });
    }),
    catchError((err, caught) => {
      return caught;
    })
  );
}
