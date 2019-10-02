import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTitleComponent } from './add-user-title.component';

describe('AddUserTitleComponent', () => {
  let component: AddUserTitleComponent;
  let fixture: ComponentFixture<AddUserTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
