const Discord = require('discord.js')
const bot = new Discord.Client()

// bot.on() permet de récuperer un évennemet.
// L'event "ready" réagis quand le bot est prêt
// L'event "message" permpet de récuperer un message qui a été envoyé.


bot.on('ready', () => {
  console.log('Connecté!') // La console dire "Connecté!" comme vous l'avez vu!
})

bot.on('message', message =>{ 
  if(message.content.startWith("ping")){
    message.channel.send('pong')
  };
  
})
bot.login(process.env.BOT_TOKEN)
