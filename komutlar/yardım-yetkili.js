const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`RTX-BOT | Yetkili Komutları`, client.user.avatarURL) 
      .setDescription('**[Destek Sunucum İçin Tıkla](https://discord.gg/a2C9m5f)**')
.setThumbnail(client.user.avatarURL)
      .addField('*<a:gif:737051357839884420>*Genel', '`kick`, ,`ban`, `reboot`, `bug-bildir`,`invites`, `banlist`, `bot-kontrol`, `canlı-destek`, `davet`, `oylama`, `tavsiye`, `yapımcılar`, `zıt-renk`, `sikayet`')
      .addField('*<a:gif:737051357839884420>*Gerekli Komutlar', '`reklam-taraması`, `ever-engel`, `kısalt`, `sil`, `sunucu-sistemi`')
      .addField('*<a:gif:737051357839884420>*Diğer', '`özelodasistemi`, `sureli-mute`, `söv`, `ping`, `bot-bilgi, `serverpanel`')
      .addField('*<a:gif:737051357839884420>*Koruma Komutları', '`yavaş-mod`,   `ban-bilgi`, `reklam-taraması`,`profil`, `kick`, `ban`, `güvenlik`,`reklam-engelleme`')
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
    name: 'yetkili',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};