
import { Router } from 'express'
import productController from '../controllers/product/product.controller.js'

const product_router = new Router()

product_router.get('/product_types', productController.getTypesProduct)
product_router.get('/get_product_by_type/:typeId', productController.getProductsByType)



export default product_router