import { Router } from 'express'
import authorizationController from '../controllers/auth/authorization.controller.js'

const auth_router = new Router()

auth_router.post('/signin', authorizationController.signin)
auth_router.post('/signup', authorizationController.signup)
auth_router.get('/roles', authorizationController.getRoles)


export default auth_router