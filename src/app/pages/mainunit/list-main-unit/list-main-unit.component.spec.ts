import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainUnitComponent } from './list-main-unit.component';

describe('ListMainUnitComponent', () => {
  let component: ListMainUnitComponent;
  let fixture: ComponentFixture<ListMainUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMainUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMainUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
