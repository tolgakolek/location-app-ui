import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserTitleComponent } from './update-user-title.component';

describe('UpdateUserTitleComponent', () => {
  let component: UpdateUserTitleComponent;
  let fixture: ComponentFixture<UpdateUserTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
