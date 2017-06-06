import { TestBed, inject } from '@angular/core/testing';

import { ToDoService } from './to-do.service';

describe('ToDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoService]
    });
  });

  it('should ...', inject([ToDoService], (service: ToDoService) => {
    expect(service).toBeTruthy();
  }));
});
