import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBuildComponent } from './update-build.component';

describe('UpdateBuildComponent', () => {
  let component: UpdateBuildComponent;
  let fixture: ComponentFixture<UpdateBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
