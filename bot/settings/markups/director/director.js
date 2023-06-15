

import { requestGetApi } from "../../../utils/requests.js"
import { generateMenuMarkup } from "./utils/generate_markups.js"

// const getRoles = async () => {
//     const { data } = await axios({
//         url: "http://localhost:4040/api/auth/roles"
//     })
//     return data
// }
// console.log(await getRoles())


const comebackMarkup = {
    resize_keyboard: true,
    one_time_keyboard: true,
    inline_keyboard:
        [
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





const stafMarkup = {
    resize_keyboard: true,
    one_time_keyboard: true,
    inline_keyboard: [
        [
            {
                text: "Работают",
                callback_data: "staff_working",
                handler: async (chat_id, bot, message_id) => {
                    const staffs_work = await requestGetApi('/user/users_work', 'get')
                    console.log(staffs_work)

                    let resultString = ''
                    staffs_work.forEach(item => {
                        resultString += `
                        \nПользователь: @${item.username},
                        \nСтатус работы: ${item.status_work ? 'Работает' : 'Не работает'},
                        \nДолжность: ${item.role.name_role}
                        `
                    })

                    bot.editMessageText(resultString, { chat_id, message_id, reply_markup: comebackMarkup })

                }
            },
            {
                text: "Не работают",
                callback_data: "staff_dont_work",
                handler: async (chat_id, bot, message_id) => {
                    const staffs_not_work = await requestGetApi('/user/users_not_work', 'get')

                    let resultString = ''
                    staffs_not_work.forEach(item => {
                        resultString += `
                        \nПользователь: @${item.username},
                        \nСтатус работы: ${item.status_work ? 'Работает' : 'Не работает'},
                        \nДолжность: ${item.role.name_role}
                        `

                    })
                    bot.editMessageText(resultString, { chat_id, message_id, reply_markup: comebackMarkup })

                }
            },
        ],
        [
            {
                text: "Повара",
                callback_data: "staff_cook",
                handler: async (chat_id, bot, message_id) => {
                    const staffs_cook = await requestGetApi('/user/users_cook', 'get')
                    if (staffs_cook == 0) {
                        bot.sendMessage('В данный момент у вас нет поваров ', { chat_id, message_id, reply_markup: comebackMarkup })
                    } else {
                        let resultString = ''
                        staffs_cook.forEach(item => {
                            resultString += `
                            \nПользователь: @${item.username},
                            \nДолжность: ${item.role.name_role}
                            `
                        })
                        bot.editMessageText(resultString, { chat_id, message_id, reply_markup: comebackMarkup })
                    }

                }
            },
            {
                text: "Официанты",
                callback_data: "staf_waiter",
                handler: async (chat_id, bot, message_id) => {
                    const staffs_waiter = await requestGetApi('/user/users_waiter', 'get')

                    if (staffs_waiter == 0) {
                        bot.editMessageText('В данный момент у вас нет официантов ', { chat_id, message_id, reply_markup: comebackMarkup })
                    } else {
                        let resultString = ''
                        staffs_waiter.forEach(item => {
                            resultString += `
                            \nПользователь: @${item.username},
                            \nДолжность: ${item.role.name_role}
                            `
                        })
                        bot.editMessageText(resultString, { chat_id, message_id, reply_markup: comebackMarkup })
                    }
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
                handler: async (chat_id, bot, message_id) => {
                    const info_tables = await requestGetApi('/table/table_info', 'get')
                    bot.editMessageText(
                        `
                    \n Всего столов: ${info_tables.count.tables},
                    \n Свободных столов: ${info_tables.count.free_tables},
                    \n Занятых столов: ${info_tables.count.occupied_tables}
                    `,
                        {
                            chat_id, message_id, reply_markup: comebackMarkup
                        }
                    )
                }
            },
            {
                text: "Свободные столики",
                callback_data: 'free_tables',
                handler: async (chat_id, bot, message_id) => {
                    const free_tables = await requestGetApi('/table/table_free', 'get')
                    if (free_tables == 0) {
                        bot.editMessageText('Свободных столов в данный момент времени - нет', { chat_id, message_id, reply_markup: comebackMarkup })
                    } else {
                        let count_tables = [];

                        free_tables.forEach(item => {
                            count_tables.push(item.number_table)
                        })
                        bot.editMessageText(`Список свободных столиков: ${count_tables.toString()} `, { chat_id, message_id, reply_markup: comebackMarkup })


                    }
                }
            },
            {
                text: "Занятые столики",
                callback_data: 'occupied_tables',
                handler: async (chat_id, bot, message_id) => {
                    const occupied_tables = await requestGetApi('/table/table_not_free', 'get')
                    if (occupied_tables == 0) {
                        bot.editMessageText('Занятых столов в данный момент времени - нет', { chat_id, message_id, reply_markup: comebackMarkup })
                    } else {
                        let count_tables = []
                        occupied_tables.forEach(item => {
                            count_tables.push(item.number_table)
                        })

                        // Сделать столы кнопками.
                        bot.editMessageText(`Список занятых столиков:${count_tables} `, { chat_id, message_id, reply_markup: comebackMarkup })
                    }
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






const menuListMarkup = await generateMenuMarkup()
const menuMarkup = {
    resize_keyboard: true,
    one_time_keyboard: true,
    inline_keyboard: menuListMarkup
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
                    bot.editMessageText('Выберите раздел, который вас интересует', { chat_id, message_id, reply_markup: menuMarkup })
                }
            }
        ],


    ]
}


export { directorMarkup, stafMarkup, roomMarkups, menuMarkup, requestGetApi }