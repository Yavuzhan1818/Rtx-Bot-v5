const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Snax Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:f1:637967475530530816>| s!ban : Kullanım : s!ban","kimi banlayacagım ")
.addField("<a:f1:637967475530530816>| s!kick : Kullanım : s!kick","atacagın ")
.addField("<a:f1:637967475530530816>| s!capslock-engel : Kullanımı s!capslock-engel ", "Yazınca Aktif Oluyor Eğer Bir Daha Yazarsan Kapanır")
.addField("<a:f1:637967475530530816>| s!slowmode : Kullanım : s!slowmode 3", "Slowmode açar")
.addField("<a:f1:637967475530530816>| s!reklam-kick : Kullanım : s!reklam-kick aç", "Yazarsanız 3 Kere Reklam Yapanı Sunucu Atar")
.addField("<a:f1:637967475530530816>| s!küfür-engelle : Kullanım : s!küfür-engelle aç", "Küfür engel açar")
.addField("<a:f1:637967475530530816>| s!ayarlar : Kullanım : s!ayarlar","Sunucu Yaptınız Ayar Gosterir")
.addField("<a:f1:637967475530530816>| s!prefix : Kullanım : s!prefix prefix", "Sunucu için prefix ayarlar")
.addField("<a:f1:637967475530530816>| s!sayaç : Kullanım : s!sayaç sayı kanal", "Sayaç ayarlar")
.addField("<a:f1:637967475530530816>| s!oy-kick : Kullanım : s!oy-kick @kullanıcı", "Oy yaparak kişiyi atar")
.addField("<a:f1:637967475530530816>| s!oy-ban : Kullanım : s!oy-ban @kullanıcı", "Oy yaparak Kişiyi Banlar")
.addField("<a:f1:637967475530530816>| s!reklamtaraması : Kullanım : s!reklamtaraması", "Sunucu Rekalam Yapan Gosterir")
.addField("<a:f1:637967475530530816>| s!webpanel : Kullanım : s!webpanel ", "Botun Sitesini Yani Kontrol Panel Gosterir")
.addField("<a:f1:637967475530530816>| s!sunucu-koruma : Kullanım : s!koruma-bilgi ", "Burdan Koruma Kodlarını Görebilirsiniz")
.addField("<a:f1:637967475530530816>| s!rolbilgi : Kullanım : s!rolbilgi @rol", "Rol Bilgisini Gosterir")
.addField("<a:f1:637967475530530816>| s!bototorol : Kullanimı : s!bototoril @rol", " Sunucu Giren Botlara Rol Verir")
.addField("<a:f1:637967475530530816>| s!reklam-engelle : Kullanımı : s!reklam-engelle aç", "Sunucudaki Reklamları Engeller")
  

return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'yet12',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



