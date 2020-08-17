const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField("Youtube",`https://www.youtube.com/channel/UCYPRwGpG0uVhGALXrr7oJ_Q?view_as=subscriber`)
  .addField("Insagram",`https://www.instagram.com/_yavzhan_/`)
  .addField("Destek Sunucusu",`https://discord.gg/fSnrNJT`)
 .addField("**Yapımcım**", `<@688402666103111790>`)
 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sosyalmedya'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Botun Yapımcısını Gösterir',
  usage: 'yapımcım'
};