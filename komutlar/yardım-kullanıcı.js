const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Rtx Bot | Eğlence Komutları`, client.user.avatarURL) 
      .setDescription('**[Website](https://rtx-bot-web-sitesi.glitch.me)**')
.setThumbnail(client.user.avatarURL)
      .addField('<a:hype1:740517287986987018> Komutlar:', '`balık-tut`, `efkarım`,`düello`, `fake-mesaj`, `yazı-tura`, `hapishane`, `hesapla`, `,sigarayak`, `kartopu`, `pixel`, `rip`, `avatar`, `stresçarkı`, `bayrak`, `wasted`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/655459488236568597/669939737431375872/cizgi.gif") 
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'eglence',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};