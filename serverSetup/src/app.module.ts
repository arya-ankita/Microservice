import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { join } from 'path';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
     TasksModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }

// ClientsModule.register([
    //   {
    //     name: 'HERO_PACKAGE',
    //     transport: Transport.GRPC,
    //     options: {
    //       url: `localhost:3004`,
    //       package: 'hero',
    //       protoPath: join(__dirname, 'hero/hero.proto'),
    //     },
    //   },
    // ]),