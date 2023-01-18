import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListFiltersComponent } from './user-list-filters.component';

describe('UserListFiltersComponent', () => {
  let component: UserListFiltersComponent;
  let fixture: ComponentFixture<UserListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
