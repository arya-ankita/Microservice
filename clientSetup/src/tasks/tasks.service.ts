import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { TasksServiceClient } from 'src/protos/tasks/tasks.service';

@Injectable()
export class TasksService implements OnModuleInit {
    private tasksService: TasksServiceClient;
    constructor(
        @Inject('TASKS_PACKAGE') private clientGrpc: ClientGrpc,

    ){}
    onModuleInit() {
        this.tasksService = this.clientGrpc.getService<TasksServiceClient>('TasksService');
    }
    async getAllTasks():Promise<any>{
        const taskResult = await firstValueFrom( this.tasksService.getAll({}));
        //this.tasksService.getAll({});
        console.log("============taskResult", taskResult);
        return taskResult;
    }
}
