import Roles from "../models/Roles.js";

const roles = [
    {
        id: 1,
        name_role: 'Директор',
    },
    {
        id: 2,
        name_role: 'Повар',
    },
    {
        id: 3,
        name_role: 'Официант',
    },
]


const render_roles = async () => {
    try {
        roles.forEach(async item => {
            await Roles.findOrCreate({ where: { id: item.id, name_role: item.name_role } })
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}


export default render_roles