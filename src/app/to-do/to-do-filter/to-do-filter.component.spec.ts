import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFilterComponent } from './to-do-filter.component';

describe('ToDoFilterComponent', () => {
  let component: ToDoFilterComponent;
  let fixture: ComponentFixture<ToDoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
