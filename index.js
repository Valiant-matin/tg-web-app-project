const TelegramBot = require('node-telegram-bot-api');

const token = '6404960441:AAFnyNB4IU8QnfUY3NLtv3fXqzp0hvAGytg';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId, 'Проверка');
});