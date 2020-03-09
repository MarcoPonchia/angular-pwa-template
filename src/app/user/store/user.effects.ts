import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import * as UserActions from "./user.actions";
import { User } from "../../shared/models/user.model";
import { environment } from "src/environments/environment";
import { of } from "rxjs";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  @Effect()
  login = this.actions$.pipe(
    ofType(UserActions.login),
    switchMap((action: { user: User }) =>
      // {
      // return this.httpClient.post(
      //   `${environment.apiPath}/login`, action.user,
      //   {
      //     observe: 'response'
      //   }
      // TODO: fake login only for test
      {
        // http://localhost:3000/users?email=mp@gmail.com&username=merack
        return this.httpClient
          .get(
            `${environment.apiPath}/users?email=${action.user.email}&username=${action.user.username}`
          )
          .pipe(
            map((response: HttpResponse<any>) => {
              // TODO: only mock
              const user = new User(response[0]);

              this.router.navigate(["user/my_account"]);
              return UserActions.confirmLogin({ user });
            }),
            catchError((err: HttpErrorResponse) =>
              of(
                UserActions.rejectLogin({
                  errors: { loginFailed: "user or password incorrect" }
                })
                // UserActions.rejectLogin({ errors: { loginFailed: err.error } })
              )
            )
          );
      }
    )
  );

  // @Effect({dispatch: false})
  // logout = this.actions$
  //   .pipe(
  //     ofType(UserActions.logout),
  //     tap(action => {
  //       this.authorizationTokenService.remove();
  //     })
  //   );

  // @Effect()
  // fetchUser = this.actions$
  //   .pipe(
  //     ofType(UserActions.fetchUser),
  //     switchMap(action => {
  //       return this.httpClient.get(
  //         `${environment.apiPath}/logged_user`,
  //         {
  //           headers: new HttpHeaders({Authorization: action.authToken}),
  //         }
  //       );
  //     }),
  //     map((response: HttpResponse<any>) => {
  //       const authorizationToken = this.authorizationTokenService.get();
  //       return UserActions.setUser({
  //         user: this.apiTranslator.modelToCamelCase<User>(User, {
  //           ...response,
  //           authorizationToken
  //         })
  //       });
  //     }),
  //     catchError((err, caught) => {
  //       return caught;
  //     })
  //   );

  // @Effect()
  // UpdateUser = this.actions$
  //   .pipe(
  //     ofType(UserActions.updateUser),
  //     switchMap(action => {
  //       return this.httpClient.patch(
  //         `${environment.apiPath}/users/${action.user.id}`,
  //         this.apiTranslator.modelToApi('User', action.user)
  //       );
  //     }),
  //     map((response: any) => {
  //       const authorizationToken = this.authorizationTokenService.get();
  //       return UserActions.setUser({
  //         user: this.apiTranslator.modelToCamelCase<User>(User, {
  //           ...response,
  //           authorizationToken
  //         })
  //       });
  //     }),
  //     catchError((err, caught) => {
  //       return caught;
  //     })
  //   );
}
