import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing'

import { TodoService } from './todo.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('TodoService', () => {
  let service: TodoService;
  let http: HttpClient;

  //With SpyObject
  // let httpClientSpy: jasmine.SpyObj<HttpClient>

  // beforeEach(() => {
  //   httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  //   service = new TodoService(httpClientSpy);
  // });

  //With TestBed using Stub
  // const httpStub = {
  //   get: () => of([
  //     {
  //       userId: 1,
  //       id: 1, title: 'delectus aut autem',
  //       completed: false
  //     }
  //   ])
  // }

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [
  //       {
  //         provide: HttpClient,
  //         useValue: httpStub
  //       }
  //     ]
  //   });
  //   service = TestBed.inject(TodoService);
  // });

  //with TestBed using TestModule
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ] 
    });
    
    service = TestBed.inject(TodoService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get method with correct endpoint', () => {
    const spy = spyOn(http, 'get').and.callThrough();

    service.getTodos();
    expect(spy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/');
  });
});
