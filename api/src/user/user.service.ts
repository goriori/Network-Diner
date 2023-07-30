
import { Injectable, Inject } from '@nestjs/common';

import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('CATS_REPOSITORY')
        private userRepository: typeof User
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll<User>();
    }
}