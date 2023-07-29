import Users from '../../database/models/Users.js'
import Roles from '../../database/models/Roles.js'
import userServices from './user.services.js'
class UserController {

    async getAllUser(req, res) {
        try {
            const users = await userServices.getAllUser()
            res.json(users)
        } catch (error) {
            console.log(error)
        }
    }


    async getWaiter(req, res) {
        try {
            const usersWaiter = await userServices.getUserRole(3)
            res.json(usersWaiter)
        } catch (error) {
            console.log(error)
        }
    }


    async getCooks(req, res) {
        try {
            const usersWaiter = await userServices.getUserRole(2)
            res.json(usersWaiter)
        } catch (error) {
            console.log(error)
        }
    }


    async getUsersWork(req, res) {
        try {
            const usersWork = await userServices.getUsersStatusWork(true)
            res.json(usersWork)
        } catch (error) {
            console.log(error)
        }
    }
    async getUsersNotWork(req, res) {
        try {
            const usersNotWork = await userServices.getUsersStatusWork(false)
            res.json(usersNotWork)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new UserController