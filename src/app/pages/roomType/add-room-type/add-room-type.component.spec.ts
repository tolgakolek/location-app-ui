import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomTypeComponent } from './add-room-type.component';

describe('AddRoomTypeComponent', () => {
  let component: AddRoomTypeComponent;
  let fixture: ComponentFixture<AddRoomTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoomTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
