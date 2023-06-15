import { DataTypes } from 'sequelize'
import database from '../database.js'

import Products_type from './Product_type.js'

const Products = database.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    name_product: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_product:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue:'Отсутствует'
    },
    price_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    description_product: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    compound_product: {
        type: DataTypes.TEXT,
        allowNull: true
    }


})

Products_type.hasMany(Products)
Products.belongsTo(Products_type)


export default Products