import { Column, Table, Model } from 'sequelize-typescript'



@Table
export class User extends Model {
    @Column
    id: number;

    @Column
    username: string;

    @Column
    password: string;

    @Column
    phone_nuimber: string;
}

