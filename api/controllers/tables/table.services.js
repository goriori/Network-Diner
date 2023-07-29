
import Tables from "../../database/models/Tables.js"

class TableServices {
    constructor() {

    }
    async getAll() {
        return await Tables.findAll()
    }
    async getOne(id) {
        const findTable = await Tables.findOne({ where: { id } })
        if (!findTable) return res.status(404).json('Not found')
        return findTable
    }
    async getInfo() {

        const tables = await Tables.findAndCountAll()
        const free_tables = await Tables.findAndCountAll({ where: { condition: false } })
        const occupied_tables = await Tables.findAndCountAll({ where: { condition: true } })
        const objectResponse = {
            count: {
                tables: tables.count,
                free_tables: free_tables.count,
                occupied_tables: occupied_tables.count
            }

        }
        return objectResponse
    }
    async getConditionTables(condition) {

        return await Tables.findAll({ where: { condition } })
    }
}

export default new TableServices()