import Users from '../../database/models/Users.js'
import Roles from '../../database/models/Roles.js'

class UserServices {

    async getAllUser() {
        return await Users.findAll()
    }
    async getUserRole(roleId) {
        return await Users.findAll({ where: { roleId }, include: [{ model: Roles, required: true }] })
    }
    async getUsersStatusWork(status_work) {
        return await Users.findAll({ where: { status_work }, include: [{ model: Roles, required: true }] })
    }


}

export default new UserServices()