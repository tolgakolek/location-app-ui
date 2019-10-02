import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserRoleComponent } from './list-user-role.component';

describe('ListUserRoleComponent', () => {
  let component: ListUserRoleComponent;
  let fixture: ComponentFixture<ListUserRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
