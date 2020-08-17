const Discord = require('discord.js')
const anime = ['https://media1.tenor.com/images/bddf2872f32eea960e56bd76093dd3c9/tenor.gif?itemid=6035620',

'https://media1.tenor.com/images/f8539f656d2ed90be7cd3bbe95d263d2/tenor.gif?itemid=6014346' ,

'https://media1.tenor.com/images/d22f943bb7e00e95b9669ac4ee0de608/tenor.gif?itemid=15633073' ,

'https://media1.tenor.com/images/ad4804e880c2edcecbb79217b479610a/tenor.gif?itemid=10903422' ,

'https://media.tenor.com/images/87c326c3a36e6c5d0b53cd58e8e6fce8/tenor.gif' ,

'https://media1.tenor.com/images/ad4804e880c2edcecbb79217b479610a/tenor.gif?itemid=10903422',

'https://media1.tenor.com/images/22d2021540541e319091c1e89774e008/tenor.gif?itemid=15836771',

'https://media1.tenor.com/images/5c21ba92ce99620bc9bea7ca7b1eac73/tenor.gif?itemid=7684098',

'https://media1.tenor.com/images/de20ad92370bc4b3657010e1db3ecdf0/tenor.gif?itemid=11807436',

'https://media1.tenor.com/images/2b5d7bb1dd4a8e64869c33499c409582/tenor.gif?itemid=9509158'
]

exports.run = function(client, message, args) {

message.channel.send(

  new Discord.RichEmbed()

  .setColor("RANDOM")

  .setTitle("Fiber")

  .setImage(anime[Math.floor(Math.random() * anime.length)])
  
  .setFooter(message.guild.name, client.user.avatarURL)

  .setTimestamp()

  )

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'anime',

  allies: [],

  description: 'Random Anime paylaşır.',

  usage: 'anime'
///////FİBER CODE
}