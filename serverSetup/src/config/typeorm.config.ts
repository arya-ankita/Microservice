import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../src/.env') });

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: process.env.DATABASE_CONNECTION as 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE)
}
