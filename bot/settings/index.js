import roles_markups from "./markups/roles.js"


const command_operations = [
    {
        command: '/start',
        regCommand: /\/start/,
        description:'Запустить бота',
        handler: (chat_id, bot) => {
            bot.sendMessage(chat_id, 'Добрый день, кем вы являетесь?', { reply_markup: roles_markups })
        }
    },


]

export default command_operations    