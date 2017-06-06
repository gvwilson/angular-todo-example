import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoContainerComponent } from './to-do-container.component';

describe('ToDoContainerComponent', () => {
  let component: ToDoContainerComponent;
  let fixture: ComponentFixture<ToDoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
