const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = function(client, message, args) {
  
 
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle("c!yardım")
.addField("<a:nitro2:740518407673217084> c!bilgi",`Bot Bilgilerini Gösterir`,true)
.addField("<a:yan1:740517356450873394> c!yapımcım",`Yapımcımım Bilgilerini Listeler`,true)
.addField(" <a:elmas:740517295138275368> c!desteksunucu",`DestekSunucusunun Davetini Atar`,true)
.addField("<a:yildiz2:740518065166352434>  c!davet",`Botun Davet Link Atar`,true)
.addField("<a:nitro1:740517297873092658> c!sunucukur",`Discord Sunucusu  Kurar.`,true)
.addField("<a:boost:740517288553218072>c!satınal",`Bot Satış Listesini Atar`,true)
.addField("<a:boost:740517288553218072>c!anime",`Rasgele PP  Atar`,true)
.setThumbnail(client.user.avatarURL)

message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'bot',
  description: 'Yardım komutlarını Gösterir',
  usage: 'yardım'
};