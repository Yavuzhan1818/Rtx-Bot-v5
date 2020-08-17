const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'c!'

	const codare = new Discord.RichEmbed()
       .setAuthor(`Rtx Bot logo Menüsü`)
       .setTitle(`Rtx Bot (Logo) Komutları`)
       .setDescription  (`<a:gif:737051357839884420> c!yeşil  Yeşil Logo Yapar. \n <a:boost:740517288553218072> c!roket Roketli Logo Atar \n <a:nitro1:740517297873092658> c!ejderya Ejderyalı Logo Yapar. \n <a:elmas:740517295138275368> c!altın Altınlı Logo Yapar. \n <a:yan1:740517136514023457> c!buz Buzlu Logo Yapar. \n <a:boost:740517288553218072> c!neon-yeşil. Neon Logo Yapar.\n <a:hype2:740517279636127826> c!neon-pembe Neon Oembe Logo Yapar. \n <a:nitro2:740518407673217084> c!banner Banner Logo Yapar `)
       .addField("» Linkler", ` \n <a:gif:737051357839884420> [Davet Et](https://discord.com/oauth2/authorize?client_id=732698517876768910&scope=bot&permissions=8)` + "**  **" + `\n <a:nitro1:740517297873092658> [Destek Sunucusu](https://discord.gg/fSnrNJT)`  + "**  **" + `\n <a:onay:740517355402297344> [Web Sitesi](https://rtx-bot-web-sitesi.glitch.me//)  `, false)
       .setFooter(`Rtx Bot Gururla Sunar`)
       .setImage("https://cdn.discordapp.com/attachments/727260799352963194/743866019390554171/AyrmaCubugu_rainboww.gif") 
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
  name: 'logo',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};