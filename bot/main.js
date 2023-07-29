import Telegram from 'node-telegram-bot-api'
import dotenv from 'dotenv'
dotenv.config()



import command_operations from './settings/index.js'




const bot = new Telegram(process.env.API_TOKEN_BOT, {  
    polling: true
})


bot.setMyCommands(command_operations)
command_operations.forEach(command => {
    bot.onText(command.regCommand, (msg) => { 
        const chat_id = msg.chat.id
        const text = msg.text
        command.handler(chat_id, bot)
    }) 
})




import roles_markups from './settings/markups/roles.js'
import { directorMarkup, stafMarkup, roomMarkups, menuMarkup } from './settings/markups/director/director.js'

const allCallBacks = [
    ...roles_markups.inline_keyboard,
    ...directorMarkup.inline_keyboard,
    ...stafMarkup.inline_keyboard,
    ...roomMarkups.inline_keyboard,
    ...menuMarkup.inline_keyboard
].flat(Infinity)

 
bot.on('callback_query', (msg) => {

    const data = msg.data
    const message_id = msg.message.message_id
    const chat_id = msg.message.chat.id
    const user = msg.from
    allCallBacks.find(item => item.callback_data === data).handler(chat_id, bot, message_id, user)


})
console.log('Работает')




