import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserTitleComponent } from './list-user-title.component';

describe('ListUserTitleComponent', () => {
  let component: ListUserTitleComponent;
  let fixture: ComponentFixture<ListUserTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
