import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeviceComponent } from './update-device.component';

describe('UpdateDeviceComponent', () => {
  let component: UpdateDeviceComponent;
  let fixture: ComponentFixture<UpdateDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
