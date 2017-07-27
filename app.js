const TeleBot = require('telebot');
const search = require('youtube-search');
const bot = new TeleBot('395217544:AAH-OueyXIqYDnMBkejddDu87WMz8Ktsxwg');

const opts = {
  maxResults: 1,
  key: 'AIzaSyBjGhQultby8-blH5QhR6GQTswxUQpZIZM'
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