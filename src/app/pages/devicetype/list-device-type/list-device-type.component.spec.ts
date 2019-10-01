import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeviceTypeComponent } from './list-device-type.component';

describe('ListDeviceTypeComponent', () => {
  let component: ListDeviceTypeComponent;
  let fixture: ComponentFixture<ListDeviceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeviceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeviceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
