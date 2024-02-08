import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Task } from "./task.entity";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService extends TypeOrmCrudService<Task> {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {
        super(taskRepository);
    }
}
