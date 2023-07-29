
import productServices from "./product.services.js"


class ProductController {

    async getTypesProduct(req, res) {
        try {
            const product_types = await productServices.getTypesProduct()
            res.json(product_types)
        } catch (error) {
            console.log(error)
        }
    }
    async getProductsByType(req, res) {
        try {
            const { typeId } = req.params
            const getProducts = await productServices.getProductsByType(typeId)
            res.json(getProducts)
        } catch (error) {
            console.log(error)
        }
    }
}


export default new ProductController