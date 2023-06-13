

import axios from "axios"


const getRoles = async () => {
    const { data } = await axios({
        url: "http://localhost:4040/api/auth/roles"
    })
    return data
}
console.log(await getRoles())





const stafMarkup = {
    resize_keyboard: true,
    one_time_keyboard: true,
    inline_keyboard: [
        [
            {
                text: "Работают",
                callback_data: "staff_working",
                handler: (chat_id, bot, message_id) => {

                }
            },
            {
                text: "Не работают",
                callback_data: "staff_dont_work",
                handler: (chat_id, bot, message_id) => {

                }
            },
        ],
        [
            {
                text: "Повара",
                callback_data: "staff_cook",
                handler: (chat_id, bot, message_id) => {

                }
            },
            {
                text: "Официанты",
                callback_data: "staf_waiter",
                handler: (chat_id, bot, message_id) => {

                }
            },
        ],
        [
            {
                text: 'Вернуться назад',
                callback_data: 'director_backap',
                handler: (chat_id, bot, message_id) => {
                    bot.editMessageText('Выберите дальнейшие действия ув.Директор', { chat_id, message_id, reply_markup: directorMarkup })
                }
            }
        ]
    ]
}

const roomMarkups = {
    resize_keyboard: false,
    one_time_keyboard: true,
    inline_keyboard: [
        [
            {
                text: 'Информация о столиках',
                callback_data: 'room_information_tables',
                handler: (chat_id, bot, message_id) => {

                }
            },
            {
                text: "Свободные столики",
                callback_data: 'free_tables',
                handler: (chat_id, bot, message_id) => {

                }
            },
            {
                text: "Занятые столики",
                callback_data: 'occupied_tables',
                handler: (chat_id, bot, message_id) => {

                }
            }
        ],
        [
            {
                text: 'Вернуться назад',
                callback_data: 'director_backap',
                handler: (chat_id, bot, message_id) => {
                    bot.editMessageText('Выберите дальнейшие действия ув.Директор', { chat_id, message_id, reply_markup: directorMarkup })
                }
            }
        ]
    ]
}

const menuMarkup = {
    resize_keyboard: true,
    one_time_keyboard: true,
    inline_keyboard:[
        [
            {
                text:'Test',
                callback_data:'test',
                handler:(chat_id, bot, message_id)=> {

                }
            }
        ]
    ]
}


const directorMarkup = {
    resize_keyboard: true,
    one_time_keyboard: true,
    inline_keyboard: [
        [
            {
                text: "Сотрудники",
                callback_data: "director_staff",
                handler: (chat_id, bot, message_id) => {
                    bot.editMessageText('Выберите раздел, который вас интересует', { chat_id, message_id, reply_markup: stafMarkup })
                }
            },
            {
                text: "Помещение",
                callback_data: "director_room",
                handler: (chat_id, bot, message_id) => {
                    bot.editMessageText('Выберите раздел, который вас интересует', { chat_id, message_id, reply_markup: roomMarkups })
                }
            },
            {
                text: "Меню блюд",
                callback_data: "director_menu",
                handler: (chat_id, bot, message_id) => {

                }
            }
        ],

    ]
}


export { directorMarkup, stafMarkup, roomMarkups }