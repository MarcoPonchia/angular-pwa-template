import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserModule } from "./user/user.module";

const routes: Routes = [
  {
    path: "companies",
    loadChildren: () =>
      import("./companies/companies.module").then(m => m.CompaniesModule)
  },
  {
    path: "topics",
    loadChildren: () =>
      import("./topics/topics.module").then(m => m.TopicsModule)
  },
  { path: "user", loadChildren: () => UserModule },
  { path: "**", redirectTo: "user/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
