
import Tables from "../../database/models/Tables.js"

class TableController {
    async getAll(req, res) {
        try {
            const AllTables = await Tables.findAll()
            res.json(AllTables)
        } catch (error) {
            console.log(error)
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params
            const findTable = await Tables.findOne({ where: { id } })
            if (!findTable) return res.status(404).json('Not found')
            else res.json(findTable)
        } catch (error) {
            console.log(error)
        }

    }

    async getInfo(req, res) {
        try {
            const tables = await Tables.findAndCountAll()
            const free_tables = await Tables.findAndCountAll({ where: { conditions: false } })
            const occupied_tables = await Tables.findAndCountAll({ where: { conditions: true } })
            res.json({ tables, free_tables, occupied_tables })
        } catch (error) {
            console.log(error)
        }
    }

    async getFreeTables(req, res) {
        try {
            const free_tables = await Tables.findAll({ where: { conditions: false } })
            res.json(free_tables)
        } catch (error) {
            console.log(error)
        }
    }
    async getNotFreeTables(req, res) {
        try {
            const not_free_tables = await Tables.findAll({ where: { conditions: true } })
            res.json(not_free_tables)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new TableController