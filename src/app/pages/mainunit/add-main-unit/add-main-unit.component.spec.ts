import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainUnitComponent } from './add-main-unit.component';

describe('AddMainUnitComponent', () => {
  let component: AddMainUnitComponent;
  let fixture: ComponentFixture<AddMainUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
