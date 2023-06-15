import { DataTypes } from 'sequelize'
import database from '../database.js'



const Products_type = database.define('products_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name_type_product: {
        type: DataTypes.STRING,
        allowNull: false
    },
    callback_data:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'none_callback'
    }


})



export default Products_type