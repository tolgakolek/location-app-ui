import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSiteComponent } from './list-site.component';

describe('ListSiteComponent', () => {
  let component: ListSiteComponent;
  let fixture: ComponentFixture<ListSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
