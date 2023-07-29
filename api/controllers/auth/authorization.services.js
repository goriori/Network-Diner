import Users from "../../database/models/Users.js";
import Roles from "../../database/models/Roles.js";
import { generate_jwt, parse_token } from "./utils/jwt.js";
import { check_password, hash_password } from "./utils/hash_password.js";
class AuthorizationService {
    constructor() {
        this.messages_response = {
            success: {
                authorization: {
                    status: 200,
                    message: "Success authorization",
                    user: {
                        username: null,
                        enterprice_id: null,
                        role: null
                    },
                },
                registration: {
                    status: 200,
                    message: "Success registration new user",
                }

            },
            errors: {
                unauthorize: {
                    status: 401,
                    message: "Unauthorize",
                    error: "Incorrect username or password  "
                }
            }

        }
    }

    async signin(username, password) {
        try {
            const findUser = await Users.findOne({ where: { username }, include: [{ model: Roles, required: true }] })
            if (!findUser) return 401
            const resultCheck = await check_password(password, findUser.password)
            console.log('resultCheckPassword: ', resultCheck)
            if (!resultCheck) return this.messages_response.errors.unauthorize
            this.messages_response.success.authorization.user.username = findUser.username
            this.messages_response.success.authorization.user.enterprice_id = findUser.enterpriseId
            this.messages_response.success.authorization.user.role = findUser.role
            return this.messages_response.success.authorization
        } catch (error) {
            console.log(error)
            return error
        }

    }

    async signup(username, password) {
        const hashPassword = await hash_password(password)
        const newUser = await Users.create({ username, password: hashPassword })
        return this.messages_response.success.registration
    }

    async getRoles() {
        return await Roles.findAll()
    }


}

export default new AuthorizationService()

