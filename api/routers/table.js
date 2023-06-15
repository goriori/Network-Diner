import { Router } from 'express'
import tableController from '../controllers/tables/table.controller.js'
const table_router = new Router()


table_router.get('/table_all', tableController.getAll)
table_router.get('/table_one/:id', tableController.getOne)
table_router.get('/table_info', tableController.getInfo)
table_router.get('/table_free', tableController.getFreeTables)
table_router.get('/table_not_free', tableController.getNotFreeTables)





export default table_router