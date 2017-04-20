import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ToDoService } from './to-do.service';
import { AppModule } from './app.module';

// fdescribe('AppComponent', () => {

//   let app: AppComponent;
//   const mockToDoService = {
//     addItem: () => { },
//     items: ['item 1', 'item 2', 'item 3']
//   };

//   beforeEach(() => {
//     app = new AppComponent(mockToDoService);
//   });

//   it('should count the number of items', () => {
//     expect(app.todoCount()).toEqual(3);
//   });

// });


// MOCKING + TESETBED

// fdescribe('AppComponent', () => {

//   let mockToDoService;
//   let fixture: ComponentFixture<AppComponent>;
//   let comp: AppComponent;

//   beforeEach(() => {
//     mockToDoService = {
//       addItem: () => { },
//       items: ['item 1', 'item 2', 'item 3']
//     };
//     TestBed.configureTestingModule({
//       declarations: [AppComponent],
//       providers: [
//         { provide: ToDoService, useValue: mockToDoService }
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     });
//     fixture = TestBed.createComponent(AppComponent);
//     comp = fixture.componentInstance;
//   });

//   it('should count the number of items', () => {
//     expect(comp.todoCount()).toEqual(3);
//   });

// });



// // REAL SERVICE

// fdescribe('AppComponent', () => {

//   let fixture: ComponentFixture<AppComponent>;
//   let comp: AppComponent;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [AppComponent],
//       providers: [ToDoService],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     });
//     fixture = TestBed.createComponent(AppComponent);
//     comp = fixture.componentInstance;

//     const toDoService = TestBed.get(ToDoService);
//     toDoService.items = ['item 1', 'item 2', 'item 3'];
//   });

//   it('should count the number of items', () => {
//     expect(comp.todoCount()).toEqual(3);
//   });

// });



// REAL MODULE

// fdescribe('AppComponent', () => {

//   let fixture: ComponentFixture<AppComponent>;
//   let comp: AppComponent;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [AppModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     });
//     fixture = TestBed.createComponent(AppComponent);
//     comp = fixture.componentInstance;

//     const toDoService = TestBed.get(ToDoService);
//     toDoService.items = ['item 1', 'item 2', 'item 3'];
//   });

//   it('should count the number of items', () => {
//     expect(comp.todoCount()).toEqual(3);
//   });

// });



// REAL MODULE CHANGE DETECTION

fdescribe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    const toDoService = TestBed.get(ToDoService);
    toDoService.items = ['item 1', 'item 2', 'item 3'];
  });

  it('should count the number of items', () => {
    expect(comp.todoCount()).toEqual(3);
  });

  it('should add a todo item', () => {
    expect(comp.todoCount()).toEqual(3);
    comp.onNewItem('new item');
    expect(comp.todoCount()).toEqual(4);
  });

});
