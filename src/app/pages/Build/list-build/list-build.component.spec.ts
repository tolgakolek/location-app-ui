import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuildComponent } from './list-build.component';

describe('ListBuildComponent', () => {
  let component: ListBuildComponent;
  let fixture: ComponentFixture<ListBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
