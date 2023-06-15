import { DataTypes } from 'sequelize'
import database from '../database.js'
import Enterprises from './Enterprises.js'

const Users = database.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status_work: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }

})
Enterprises.hasOne(Users)
Users.belongsTo(Enterprises)

export default Users