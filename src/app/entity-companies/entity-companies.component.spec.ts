import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCompaniesComponent } from './entity-companies.component';

describe('EntityCompaniesComponent', () => {
  let component: EntityCompaniesComponent;
  let fixture: ComponentFixture<EntityCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
