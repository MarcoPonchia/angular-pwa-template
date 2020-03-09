import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityCompaniesRoutingModule } from './entity-companies-routing.module';
import { EntityCompaniesComponent } from './entity-companies.component';


@NgModule({
  declarations: [EntityCompaniesComponent],
  imports: [
    CommonModule,
    EntityCompaniesRoutingModule
  ]
})
export class EntityCompaniesModule { }
