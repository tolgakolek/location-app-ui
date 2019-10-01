import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubUnitComponent } from './list-sub-unit.component';

describe('ListSubUnitComponent', () => {
  let component: ListSubUnitComponent;
  let fixture: ComponentFixture<ListSubUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
