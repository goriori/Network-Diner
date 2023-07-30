import { User } from "./user.entity";

export const userProdivedrs = [
    {
        provide: 'USER_REPOSITORY',
        useValue: User
    }
]