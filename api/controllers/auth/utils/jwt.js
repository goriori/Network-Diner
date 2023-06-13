import jwt from "jsonwebtoken";

const privat_key = "network_diner"
const generate_jwt = (data) => {
    const token = jwt.sign(data, privat_key, { algorithm: 'HS256', expiresIn: '24h' })
    return token
}


const parse_token = (token) => {
    const result = jwt.verify(token, privat_key, { algorithms: 'HS256' })
    return result
}


export {
    generate_jwt, parse_token
}