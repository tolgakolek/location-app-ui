import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMainUnitComponent } from './update-main-unit.component';

describe('UpdateMainUnitComponent', () => {
  let component: UpdateMainUnitComponent;
  let fixture: ComponentFixture<UpdateMainUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMainUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMainUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
