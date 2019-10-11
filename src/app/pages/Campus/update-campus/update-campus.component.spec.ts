import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampusComponent } from './update-campus.component';

describe('UpdateCampusComponent', () => {
  let component: UpdateCampusComponent;
  let fixture: ComponentFixture<UpdateCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
