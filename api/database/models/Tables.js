import { DataTypes } from 'sequelize'
import database from '../database.js'
import Enterprises from './Enterprises.js'


const Tables = database.define('tables', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    number_table: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    condition: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

})
Enterprises.hasOne(Tables)
Tables.belongsTo(Enterprises)

export default Tables