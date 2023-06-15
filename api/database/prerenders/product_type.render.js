import Products_type from "../models/Product_type.js";

const product_types = [
    {
        id: 1,
        name_type_product: 'Горячие блюда',
        callback_data:"hot_dishes"
    },
    {
        id: 2,
        name_type_product: 'Холодные блюда',
        callback_data:"cold_dishes"
    },
    {
        id: 3,
        name_type_product: 'Напитки',
        callback_data:"drink"
    },
    {
        id: 4,
        name_type_product: 'Дисерты',
        callback_data:"dessert"
    },
    {
        id: 5,
        name_type_product: 'Выпечка',
        callback_data:"bakery_products"
    },
]
const rendering_product_types = async () => {
    try {
        product_types.forEach(async item => {
            await Products_type.findOrCreate({ where: { id: item.id, name_type_product: item.name_type_product, callback_data:item.callback_data } })
        })
        return true
    } catch (error) {
        console.log(error) 
        return false
    }
}


export default rendering_product_types