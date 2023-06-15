import { Router } from 'express'
import userContoller from '../controllers/users/user.contoller.js'


const user_router = new Router()


user_router.get('/users', userContoller.getAllUser)
user_router.get('/users_waiter', userContoller.getWaiter)
user_router.get('/users_cook', userContoller.getCooks)
user_router.get('/users_work', userContoller.getUsersWork)
user_router.get('/users_not_work', userContoller.getUsersNotWork)





export default user_router