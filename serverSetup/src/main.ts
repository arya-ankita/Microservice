import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MicroserviceOptions } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
import * as path  from 'path';
dotenv.config({path: path.join(__dirname,'../../src/.env')});
const PORT = process.env.TYPEORM_PORT;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.GRPC,
      options: {
        url: `localhost:${PORT}`,
        package: 'tasks',
        protoPath: join(__dirname, '../src/protos/tasks.proto'),
      }
     });
     await app.listen();
     console.log(join(__dirname, '../src/protos/tasks.proto'));
  console.log(`Application is running on: ${PORT} `);
}
bootstrap();

