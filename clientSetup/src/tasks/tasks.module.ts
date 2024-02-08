import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CommonFunctionService } from 'src/utilities/common.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASKS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: `localhost:3004`,
          package: 'tasks',
          protoPath: join(__dirname, '../../src/protos/tasks/tasks.proto'),
        },
      },
    ]),
  ],
  providers: [TasksService, CommonFunctionService],
  controllers: [TasksController]
})
export class TasksModule { }
