import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @GrpcMethod('TasksService', 'getAll')
  async getTasks() {
    const result = await this.tasksService.findAll();
    return { tasks: result };
  }
}
