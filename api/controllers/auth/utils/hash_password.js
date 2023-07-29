import bcrypto from 'bcrypt'

const saltRounds = 10
const hash_password = async (password) => {
    const hash = await bcrypto.hash(password, saltRounds)
    return hash
}


const check_password = async (password, hash) => {
    console.log(password, hash)
    const valid_password = await bcrypto.compare(password, hash)
    return valid_password

}


export {
    hash_password, check_password
}