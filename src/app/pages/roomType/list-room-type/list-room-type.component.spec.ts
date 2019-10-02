import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoomTypeComponent } from './list-room-type.component';

describe('ListRoomTypeComponent', () => {
  let component: ListRoomTypeComponent;
  let fixture: ComponentFixture<ListRoomTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRoomTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
