
import tableServices from "./table.services.js"
class TableController {
    async getAll(req, res) {
        try {
            const AllTables = await tableServices.getAll()
            res.json(AllTables)
        } catch (error) {
            console.log(error)
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params
            const findTable = await tableServices.getOne(id)
            return res.json(findTable)
        } catch (error) {
            console.log(error)
        }

    }

    async getInfo(req, res) {
        try {
            const info = await tableServices.getInfo()
            res.json(info)
        } catch (error) {
            console.log(error)
        }
    }

    async getFreeTables(req, res) {
        try {
            const free_tables = await tableServices.getConditionTables(false)
            res.json(free_tables)
        } catch (error) {
            console.log(error)
        }
    }
    async getNotFreeTables(req, res) {
        try {
            const not_free_tables = await tableServices.getConditionTables(true)
            res.json(not_free_tables)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new TableController