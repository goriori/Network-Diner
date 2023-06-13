


import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const database = new Sequelize('network_diner', 'root', '', {
    dialect:'mysql',
    host:'localhost', 
    define:{
        timestamps:false 
    }
})


export default database