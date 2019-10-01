import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCampusComponent } from './list-campus.component';

describe('ListCampusComponent', () => {
  let component: ListCampusComponent;
  let fixture: ComponentFixture<ListCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
