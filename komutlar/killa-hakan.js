const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Killa Hakan Geliyor** !')
    .setImage(`https://www.izmirkenthaber.com.tr/images/haberler/2020/06/killa-hakan-gozluksuz-ve-bandanasiz-haliyle-sasirtti.png`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'killa-hakan',
  description: 'tanersins',
  usage: 'Maximatus geldi beybi',
};