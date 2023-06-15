import Products_type from "../../database/models/Product_type.js"
import Products from "../../database/models/Products.js"




class ProductController {

    async getTypesProduct(req, res) {
        try {
            const product_types = await Products_type.findAll();
            res.json(product_types)
        } catch (error) {
            console.log(error)
        }
    }
    async getProductByType(req, res) {
        try {
            const { type } = req.params
            const getProducts = await Products.findAll({ where: { productsTypeId: type } })
            res.json(getProducts)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new ProductController