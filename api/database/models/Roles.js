import { DataTypes } from 'sequelize'
import database from '../database.js'
import Users from './Users.js'


const Roles = database.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name_role: {
        type: DataTypes.STRING,
        allowNull: false
    },


})

Roles.hasMany(Users)
Users.belongsTo(Roles)

export default Roles