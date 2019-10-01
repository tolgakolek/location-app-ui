import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubUnitComponent } from './update-sub-unit.component';

describe('UpdateSubUnitComponent', () => {
  let component: UpdateSubUnitComponent;
  let fixture: ComponentFixture<UpdateSubUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSubUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
