
import Products_type from "../../database/models/Product_type.js"
import Products from "../../database/models/Products.js"

class ProductService {

    async getTypesProduct() {
        const product_types = await Products_type.findAll();
        return product_types
    }

    async getProductsByType(typeId) {
        const getProducts = await Products.findAll({ where: { productsTypeId: typeId } })
        return getProducts
    }
}

export default new ProductService()

