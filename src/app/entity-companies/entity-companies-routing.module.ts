import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityCompaniesComponent } from './entity-companies.component';

const routes: Routes = [{ path: '', component: EntityCompaniesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityCompaniesRoutingModule { }
