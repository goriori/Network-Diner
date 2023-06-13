import Users from "../../database/models/Users.js";
import Roles from "../../database/models/Roles.js";
import bcrypto from 'bcrypt'
import { generate_jwt, parse_token } from "./utils/jwt.js";

class AuthController {
    async signin(req, res) {
        try {
            const { username, password } = req.body

            const findUser = await Users.findOne({ where: { username }, include: [{ model: Roles, required: true }] })
            console.log(findUser.username, findUser.password)
            if (!findUser) return res.status(404).json('Unauthorize')


            bcrypto.compare(password, findUser.password, (err, result) => {
                if (!result) return res.status(401).json("Не верный пароль")

                else {
                    // const token = generate_jwt({username:findUser.username, enterpriseId:findUser.enterpriseId})
                    res.json({
                        message: "Success authorization",
                        user: {
                            username: findUser.username,
                            enterprice_id: findUser.enterpriseId,
                            role: findUser.role
                        },

                    })
                }
            })


        } catch (error) {
            console.log(error)
        }
    }

    async signup(req, res) {
        try {
            const { username, password } = req.body

            bcrypto.hash(saltRounds, password, async (err, hash_password) => {
                if (err) console.log(err)
                const createUser = await Users.create({ username, hash_password })
                res.json('Success created new user')

            })

        } catch (error) {
            console.log(error)
        }

    }

    async getRoles(req, res) {
        try {
            const getRoles = await Roles.findAll()
            res.json(getRoles)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new AuthController