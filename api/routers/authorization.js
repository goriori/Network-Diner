import { Router } from 'express'
import authorizationController from '../controllers/auth/authorization.controller.js'
import { body } from 'express-validator'
const auth_router = new Router()

auth_router.post('/signin',
    body('username', 'field username required').isString().notEmpty(),
    body('password', 'field password required').isString().notEmpty(),
    authorizationController.signin)
auth_router.post('/signup', authorizationController.signup)
auth_router.get('/roles', authorizationController.getRoles)


export default auth_router