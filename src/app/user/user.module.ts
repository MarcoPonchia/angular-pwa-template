import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { userReducer } from "./store/user.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./store/user.effects";
import { ShowUserComponent } from "./show-user/show-user.component";

@NgModule({
  declarations: [UserComponent, LoginComponent, ShowUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature("user", userReducer),
    EffectsModule.forFeature([UserEffects]),
    UserRoutingModule
  ]
})
export class UserModule {}
