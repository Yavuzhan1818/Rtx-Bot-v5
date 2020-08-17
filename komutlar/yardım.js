const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'c!'

	const codare = new Discord.RichEmbed()
       .setAuthor(`Rtx Bot Yardım Menüsü`)
       .setTitle(`Rtx Bot (Yardım) Komutları`)
       .setDescription  (`<a:gif:737051357839884420> c!yetkili  Yetkili Komutlarını Gösterir. \n <a:boost:740517288553218072> c!eglence  eglence komutlarını gösterir \n <a:elmas:740517295138275368> c!bot Botun Komutlarını Gösterir. \n <a:staff:740517280323993630> c!koruma Guard Menusunu Açar.\n <a:pin:740517295935455242> c!logo Logo Menusunu Açar.`)
       .addField("» Linkler", ` \n <a:gif:737051357839884420> [Davet Et](https://discord.com/oauth2/authorize?client_id=732698517876768910&scope=bot&permissions=8)` + "**  **" + `\n <a:nitro1:740517297873092658> [Destek Sunucusu](https://discord.gg/fSnrNJT)`  + "**  **" + `\n <a:onay:740517355402297344> [Web Sitesi](https://rtx-bot-web-sitesi.glitch.me//)  `, false)
       .setFooter(`Rtx Bot Gururla Sunar`)
  return message.channel.send(codare)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'yardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};