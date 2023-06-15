import axios from "axios"
import dotenv from 'dotenv'
dotenv.config()

const requestGetApi = async (point, method) => {
    try {
        const { data } = await axios({
            url: process.env.API_URL + point,
            method,
        })
        return data
    } catch (error) {
        console.log(error)
    }
}


export {
    requestGetApi
}