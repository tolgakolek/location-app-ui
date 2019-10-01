import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeviceTypeComponent } from './update-device-type.component';

describe('UpdateDeviceTypeComponent', () => {
  let component: UpdateDeviceTypeComponent;
  let fixture: ComponentFixture<UpdateDeviceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeviceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeviceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
