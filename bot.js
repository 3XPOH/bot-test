const Discord = reqiure('discord.js');
const client = mew Discord.Client();

client.on('ready', () ==> {
    if {message.content === 'ping') {
      message.reply('pong');
    }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
