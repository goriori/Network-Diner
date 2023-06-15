
import axios from "axios"
import {directorMarkup} from "./director/director.js"



const roles_markups = {
    resize_keyboard: true,
    one_time_keyboard: true,
    inline_keyboard: [
        [
            {
                text: 'Директор',
                callback_data: 'role_director', 
                handler: (chat_id, bot, message_id) => {


                    const input_password = async (msg) => {
                        const username = msg.from.username
                        const password = msg.text
                        bot.sendMessage(chat_id, 'Ожидайте, идет проверка данных....')
                        const auth = await authorization(username, password)
                        console.log(auth)
                        if (auth === null) bot.sendMessage(chat_id, 'Не верные данные, попробуйте снова',)
                        else {
                            const user_role = auth.user.role.name_role
                            const username = auth.user.username
                            switch (user_role) {
                                case "Директор":
                                    bot.sendMessage(chat_id, `Добро пожаловать в систему , ваша роль ${user_role} , ${username}`, { reply_markup: directorMarkup })
                                    break;
                                case "Повар":
                                    bot.sendMessage(chat_id, `Добро пожаловать в систему , ваша роль ${user_role}, ${username} cook`,)
                                    break;
                                case "Официант":
                                    bot.sendMessage(chat_id, `Добро пожаловать в систему , ваша роль ${user_role}, ${username} waiter`,)
                                    break;
                            }

                            return bot.removeListener("message", input_password);
                        }

                    }


                    bot.editMessageText('Введите пароль', { message_id, chat_id })
                    bot.on('message', input_password)


                }
            },
            {
                text: 'Повар',
                callback_data: 'role_cook',
                handler: (chat_id, bot, message_id) => {
                    bot.editMessageText('Coock hello', { message_id, chat_id })
                    console.log('coock')
                }
            },
            {
                text: 'Официант',
                callback_data: 'role_waiter',
                handler: (chat_id, bot, message_id) => {
                    bot.editMessageText('Waiter hello', { message_id, chat_id })
                    console.log('waiter')
                }
            }
        ]
    ]
}


export default roles_markups







const authorization = async (username, password) => {
    try {
        const { data } = await axios({
            method: 'post',
            url: 'http://localhost:4040/api/auth/signin',
            data: {
                username, password
            }
        })
        return data
    } catch (error) {

        console.log(error)
        return null
    }

}