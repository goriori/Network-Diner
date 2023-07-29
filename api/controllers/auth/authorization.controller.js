import Users from "../../database/models/Users.js";
import Roles from "../../database/models/Roles.js";
import bcrypto from 'bcrypt'
import { generate_jwt, parse_token } from "./utils/jwt.js";
import { check_password, hash_password } from "./utils/hash_password.js";
import { validationResult } from 'express-validator'
import authorizationServices from "./authorization.services.js";
class AuthController {
    async signin(req, res) {
        const resultValid = validationResult(req)
        if (resultValid.isEmpty()) {
            const { username, password } = req.body
            const result = await authorizationServices.signin(username, password)
            return res.json(result)

        } else {
            return res.json(resultValid.array())
        }
    }

    async signup(req, res) {
        const resultValid = validationResult(req)
        if (resultValid.isEmpty()) {
            const { username, password } = req.body
            const result = await authorizationServices.signup(username, password)
            return res.json(result)
        } else {
            return res.json(resultValid.array())
        }



    }

    async getRoles(req, res) {
        try {
            const getRoles = await authorizationServices.getRoles()
            res.json(getRoles)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new AuthController