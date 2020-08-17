const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let msg = message
   const bune = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField("» <:tac:737048183053746207> **Botun Sahibi**", "<@688402666103111790>  ")
  .addField("» <:uzay:737045132469207161> Geliştirici ","<@688402666103111790> ")
  .addField("» <:tac:737048183053746207> Bellek kullanımı", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("» <:saat:737046805484798053> Çalışma süresi", bune)
  .addField('» <:sessiz:737047209425764503> Müzik Çalınan Sunucu Sayısı ', bot.voiceConnections.size)
  .addField('» <a:pikachu:743892178824069284> **Kullanıcılar**', bot.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField("» <:kanal:738829829042077796> **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("» #Kanallar ", bot.channels.size.toLocaleString(), true)
  .addField("» <:dcjs:737043633953570877> Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» <:nodejs:737043939768401930> Node.JS sürüm**", `${process.version}`, true)
  .addField("» <:pong:737046054947651605> Ping ", bot.ping+" ms", true)
  .addField("» <:sk:737047596597641318> CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» <:pc:737043313626054727> Bit", `\`${os.arch()}\``, true)
  .addField("<:windows:737042597515755622> İşletim Sistemi", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=732698517876768910&permissions=8&scope=bot)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/a2C9m5f)", )
  .addField("**» Voteleme sayfası**", " [OYLAR MISIN?](Yakında", )
  .addField("**» Web Sitesi**", " [Web Site] https://rtx-bot-web-sitesi.glitch.me", )
   //RtxBot
 return message.channel.send(annencilermaldır);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};