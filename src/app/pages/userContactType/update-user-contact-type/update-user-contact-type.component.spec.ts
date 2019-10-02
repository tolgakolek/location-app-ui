import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserContactTypeComponent } from './update-user-contact-type.component';

describe('UpdateUserContactTypeComponent', () => {
  let component: UpdateUserContactTypeComponent;
  let fixture: ComponentFixture<UpdateUserContactTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserContactTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserContactTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
