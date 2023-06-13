import { DataTypes } from 'sequelize'
import database from '../database.js'


const Enterprises = database.define('enterprises', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name_enterprises: {
        type: DataTypes.STRING,
        allowNull: false
    },
    

})


export default Enterprises