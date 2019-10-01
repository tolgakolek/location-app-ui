import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFloorComponent } from './list-floor.component';

describe('ListFloorComponent', () => {
  let component: ListFloorComponent;
  let fixture: ComponentFixture<ListFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
