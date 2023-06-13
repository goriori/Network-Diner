import Users from '../../database/models/Users.js'


class UserController {

    async getAllUser(req, res) {
        try {
            const users = await Users.findAll()
            const sortUsers = users.filter(item => item.roleId !== 1);
            res.json(sortUsers)
        } catch (error) {
            console.log(error)
        }
    }

    
    async getWaiter() {
        try {
            const usersWaiter = await Users.findAll({ where: { roleId: 3 } })
            res.json(usersWaiter)
        } catch (error) {
            console.log(error)
        }
    }


    async getCooks() {
        try {
            const usersWaiter = await Users.findAll({ where: { roleId: 2 } })
            res.json(usersWaiter)
        } catch (error) {
            console.log(error)
        }
    }


    async getUsersWork(req, res) {
        try {
            const usersWork = await Users.findAll({ where: { status_work: true } })
            res.json(usersWork)
        } catch (error) {
            console.log(error)
        }
    }
    async getUsersNotWork(req, res) {
        try {
            const usersNotWork = await Users.findAll({ where: { status_work: false } })
            res.json(usersNotWork)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new UserController