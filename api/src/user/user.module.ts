
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { userProdivedrs } from './user.providers';
@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        UserService,
        ...userProdivedrs,
    ],
})
export class CatsModule { }