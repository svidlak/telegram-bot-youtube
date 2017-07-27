const TeleBot = require('telebot');
const search = require('youtube-search');
const bot = new TeleBot('telegram api key');

const opts = {
  maxResults: 1,
  key: 'youtube api key'
};


bot.on('/yt', (msg) => {
    let words = msg.text;
    let newWords = words.substr(words.indexOf(" ") + 1);

    search(newWords, opts, function(err, results) {
        if(err) return console.log(err);
        
        msg.reply.text(results[0].link)
    });
});

bot.start();
