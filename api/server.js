import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import chalk from 'chalk'
import bcrypto from 'bcrypt'


import auth_router from './routers/authorization.js'
import user_router from './routers/users.js'
import table_router from './routers/table.js'
import product_router from './routers/products.js'

import database from './database/database.js'
import Enterprises from './database/models/Enterprises.js'
import Tables from './database/models/Tables.js'
import Users from './database/models/Users.js'
import Roles from './database/models/Roles.js'
import Products from './database/models/Products.js'
import Products_type from './database/models/Product_type.js'



import rendering_product_types from './database/prerenders/product_type.render.js'
import render_roles from './database/prerenders/roles.render.js'
const serverStarting = async () => {
    try {
        database
            .sync({ alter: true })
            .then(() => {
                console.log(chalk.blue("CONNECTED DB"))
            })
            .then(async () => {
                await rendering_product_types()
                await render_roles()
            })
            .then(() => {
                const app = express()
                app.use(express.json())
                app.use('/api/auth', auth_router)
                app.use('/api/user', user_router)
                app.use('/api/table', table_router)
                app.use('/api/product', product_router)
                app.listen(process.env.PORT, () => {
                    console.log(chalk.blue('Server started'))
                })
            })
    } catch (error) {
        console.log(error)
    }
}

serverStarting()

