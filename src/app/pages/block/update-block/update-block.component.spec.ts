import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlockComponent } from './update-block.component';

describe('UpdateBlockComponent', () => {
  let component: UpdateBlockComponent;
  let fixture: ComponentFixture<UpdateBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
