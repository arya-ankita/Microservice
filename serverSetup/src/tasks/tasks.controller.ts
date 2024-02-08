import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { GrpcMethod } from '@nestjs/microservices';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';


@Controller('tasks')
export class TasksController {
    constructor(

        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) { }

    @GrpcMethod('TasksService', 'getAll')
    async getTasks(): Promise<any> {
        const result = await this.taskRepository.find();
        console.log("===================", result);
       return {tasks:result};
    }
}
