const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
    const trcodeshare = new Discord.RichEmbed()
    .setColor('RANDOM')
.setDescription("PlusBot Davet Sistemi")
.addField(":point_down: ",`[DavetLinkim](https://bit.ly/30O0lg5)`)
.addField(":point_down: ",`[DestekSunucum](https://discord.gg/fSnrNJT)`)
.addField(":point_down: ",`[DBl Oy (Vote)](Yakında`)
.setFooter('PlusBot & TrCodeTeam ')
  
  message.channel.sendEmbed(trcodeshare)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: 'bot-davet',
};