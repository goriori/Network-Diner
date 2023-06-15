import Users from '../../database/models/Users.js'
import Roles from '../../database/models/Roles.js'

class UserController {

    async getAllUser(req, res) {
        try {
            const users = await Users.findAll()
            res.json(users)
        } catch (error) {
            console.log(error)
        }
    }


    async getWaiter(req, res) {
        try {
            const usersWaiter = await Users.findAll({ where: { roleId: 3 }, include: [{ model: Roles, required: true }] })
            res.json(usersWaiter)
        } catch (error) {
            console.log(error)
        }
    }


    async getCooks(req, res) {
        try {
            const usersWaiter = await Users.findAll({ where: { roleId: 2 } ,include: [{ model: Roles, required: true }] })
            res.json(usersWaiter)
        } catch (error) {
            console.log(error)
        }
    }


    async getUsersWork(req, res) {
        try {
            const usersWork = await Users.findAll({ where: { status_work: true }, include: [{ model: Roles, required: true }] })
            res.json(usersWork)
        } catch (error) {
            console.log(error)
        }
    }
    async getUsersNotWork(req, res) {
        try {
            const usersNotWork = await Users.findAll({ where: { status_work: false }, include: [{ model: Roles, required: true }] })
            res.json(usersNotWork)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new UserController