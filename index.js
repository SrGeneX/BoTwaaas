const Discord = require("discord.js");
const client = new Discord.Client();
const request = require('request');

var prefix = "/";

    var hoje = new Date();
            var dd = hoje.getDate();
            var mm = hoje.getMonth()+1;
            var hh = hoje.getHours()-3;
            var min = hoje.getMinutes();
            var ss = hoje.getSeconds();
            var yyyy = hoje.getFullYear();
            if(dd<10){
                dd = '0'+dd;
            }
            if (mm<10) {
                mm = '0'+mm;
            }
            if (hh<10){
        if(hh<01){
            hh = 3+hh;
        }
                hh = '0'+hh;
            }
            if (min<10){
                min = '0'+min;
            }
            var hoje = dd+ '/' +mm+ '/' +yyyy + ' às ' + hh + ':' + min;
        var hojee = dd+ '/' +mm+ '/' +yyyy;

client.on("ready", () => {
    
     client.channels.get('497789408360267779').send(':white_check_mark: ' + hoje).then(msg => {
        msg.delete(60000)
    })
      
     
    const activities = ['www.high-mc.net/', 'www.high-mc.net']
    let counter = 0
    setInterval(function() {
        client.user.setGame(activities[counter], "https://twitch.tv/highmc")
        counter+= 1
        counter %= activities.length
    }, 10000)
});

client.on('message', (message) => {
    
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    
    if(message.channel.type === 'dm') return;
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   
       if(msg.startsWith(prefix + 'AVISO')){
	    if(!message.member.roles.find("name", 'Masters')) return message.channel.sendMessage(":x: | Você não possui permissão").then(msg => {
             msg.delete(10000)
	    })
            let args1 = message.content.slice(prefix.length + 5).split(";");
            let embed = new Discord.RichEmbed()
                .setFooter(hoje)
                .setTitle(`:loudspeaker: | HighMC - Anúncio`)
                .setDescription(args1[0])
                .addField('Atenciosamente,', message.author.username)
                .setColor('RED')
    
        client.channels.get('496033477490114580').send({embed});
        }

}); 

client.on('guildMemberAdd', member => {
    let avatar = member.user.avatarURL
  
    let embed = new Discord.RichEmbed()
        .setColor('RED')
        .setThumbnail(avatar)
        .addField('Novo integrande da equipe!', `Seja bem vindo(a), ${member} à equipe do High.\n Agora você é oficialmente um de nós. `)
        .setFooter(`© HighMC`);
        client.channels.get('496040178851250176').send(embed);
  })

  client.login(process.env.token);; 
