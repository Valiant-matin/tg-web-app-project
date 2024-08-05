const { Telegraf, Markup } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);
const webUrl = 'https://meek-maamoul-b56d5b.netlify.app';

bot.start((ctx) => {
    ctx.reply('Выберите действие',
        Markup.inlineKeyboard([
          Markup.button.callback('Кнопка 1', 'btn1'),
          Markup.button.callback('Кнопка 2', 'btn2'),
          Markup.button.callback('Очистить чат', 'clear_chat')
        ])
      );
});

bot.action('btn1', (ctx) => ctx.reply('Вы нажали Кнопка 1'));
bot.action('btn2', (ctx) => {
    
});

bot.launch();