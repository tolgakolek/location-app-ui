import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFloorComponent } from './add-floor.component';

describe('AddFloorComponent', () => {
  let component: AddFloorComponent;
  let fixture: ComponentFixture<AddFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
