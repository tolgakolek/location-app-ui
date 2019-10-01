import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubUnitComponent } from './add-sub-unit.component';

describe('AddSubUnitComponent', () => {
  let component: AddSubUnitComponent;
  let fixture: ComponentFixture<AddSubUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
