import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import chalk from 'chalk'
import bcrypto from 'bcrypt'


import auth_router from './routers/authorization.js'


import database from './database/database.js'
import Enterprises from './database/models/Enterprises.js'
import Tables from './database/models/Tables.js'
import Users from './database/models/Users.js'
import Roles from './database/models/Roles.js'

const serverStarting = async () => {
    try {
        database
            .sync()
            .then(() => {
                console.log(chalk.blue("CONNECTED DB"))
            })
            .then(() => {
                const app = express()
                app.use(express.json())
                app.use('/api/auth', auth_router)
               


                app.listen(process.env.PORT, () => {
                    console.log(chalk.blue('Server started'))
                })
            })
    } catch (error) {
        console.log(error)
    }
}

serverStarting()

