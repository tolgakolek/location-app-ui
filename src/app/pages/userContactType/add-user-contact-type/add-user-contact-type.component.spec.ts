import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserContactTypeComponent } from './add-user-contact-type.component';

describe('AddUserContactTypeComponent', () => {
  let component: AddUserContactTypeComponent;
  let fixture: ComponentFixture<AddUserContactTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserContactTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserContactTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
