const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  var banlikullanici = message.guild.fetchBans().then(bans => {
  message.channel.send(`Bu sunucuda **${bans.size}** banlı üye bulunmaktadir.`)
  })
 };

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};
exports.help = {
  name: "bansay",
};