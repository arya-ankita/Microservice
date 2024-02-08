/* eslint-disable */
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';


export interface EmptyArgument {
}

export interface TaskList {
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface TasksServiceController {

  getAll(request: EmptyArgument): Promise<TaskList> | Observable<TaskList> | TaskList;

}

export interface TasksServiceClient {

  getAll(request: EmptyArgument): Observable<TaskList>;

}

export function TasksServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getAll'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('TasksService', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('TasksService', method)(constructor.prototype[method], method, descriptor);
    }
  }
}

export const TASKS_PACKAGE_NAME = 'tasks'
export const TASKS_SERVICE_NAME = 'TasksService';