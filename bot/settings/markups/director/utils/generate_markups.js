
import { requestGetApi } from "../director.js"


const generateProductsMarkup = async (tyep_product) => {
    const products_by_type = await requestGetApi(`/product/get_product_by_type/${tyep_product}`, 'get')
    const itemsMarkup = [[]]
    for (let i = 0, l = 0; i < products_by_type.length; i++) {
        if (i % 3 === 0) {
            l++
            itemsMarkup[l] = []
        }
        itemsMarkup[l].push({
            id: products_by_type[i].id,
            text: products_by_type[i].name_product,
            callback_data: "test",
            handler: async (chat_id, bot, message_id) => {
                bot.sendMessage(chat_id, 'test product')
            }
        })
    }
    itemsMarkup[itemsMarkup.length] = [
        {
            text: 'Вернуться назад',
            callback_data: 'director_backap',
            handler: (chat_id, bot, message_id) => {
                bot.editMessageText('Выберите дальнейшие действия ув.Директор', { chat_id, message_id, reply_markup: directorMarkup })
            }
        }
    ]

    const productMarkup = {
        resize_keyboard: true,
        one_time_keyboard: true,
        inline_keyboard: itemsMarkup
    }

    return productMarkup
}





const generateMenuMarkup = async () => {
    const menu_types = await requestGetApi('/product/product_types', 'get')
    console.log(menu_types)
    const itemsMarkup = [[]]
    for (let i = 0, l = 0; i < menu_types.length; i++) {
        if (i % 3 === 0) {
            l++
            itemsMarkup[l] = []
        }
        itemsMarkup[l].push({
            id: menu_types[i].id,
            text: menu_types[i].name_type_product, 
            callback_data: menu_types[i].callback_data,
            handler: async (chat_id, bot, message_id) => {
                const productMarkup = await generateProductsMarkup(menu_types[i].id)
                bot.editMessageText(menu_types[i].name_type_product, { chat_id, message_id, reply_markup: productMarkup })
            }
        })
    }
    return itemsMarkup
}

export {
    generateMenuMarkup
}