import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceTypeComponent } from './add-device-type.component';

describe('AddDeviceTypeComponent', () => {
  let component: AddDeviceTypeComponent;
  let fixture: ComponentFixture<AddDeviceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeviceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
