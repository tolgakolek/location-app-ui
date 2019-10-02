import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserContactTypeComponent } from './list-user-contact-type.component';

describe('ListUserContactTypeComponent', () => {
  let component: ListUserContactTypeComponent;
  let fixture: ComponentFixture<ListUserContactTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserContactTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserContactTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
