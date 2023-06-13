import bcrypto from 'bcrypt'

const saltRounds = 10
const hash_password = (password) => {
    
    const hash = bcrypto.hash(saltRounds, password, (err, result) => {
        if (err) console.log(err)
        return result
    })
    console.log(hash)
    return hash
}

const check_password = (password, hash) => {
    console.log(password, hash)
    
    const valid_password = bcrypto.compare(password, hash, (err, result) => {
        console.log(result)
        if (err) console.log(err)
        return result
    })
    return valid_password

}


export {
    hash_password, check_password
}