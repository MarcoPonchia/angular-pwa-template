import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserModule } from "./user/user.module";

const routes: Routes = [
  {
    path: "companies",
    loadChildren: () =>
      import("./companies/companies.module").then(m => m.CompaniesModule)
  },
  { path: "user", loadChildren: () => UserModule },
  {
    path: "entity_companies",
    loadChildren: () =>
      import("./entity-companies/entity-companies.module").then(
        m => m.EntityCompaniesModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
