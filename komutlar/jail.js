const Discord = require('discord.js');

let rolid = "735159266243248189"; 
exports.run = async (client, message, args) => {
  if (!message.member.roles.has("735158628943790101"))
    return message.channel.send(
      `Bu komutu kullanabilmek için <@&735158628943790101> yetkisine sahip olmasınız!`
    );
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send("Hapishaneye Atılacak Üyeyi Etiketleyin!");
    if(rolid.match(/(\d{17,19})/g)) {
        member.roles.forEach(role => member.removeRole(role));
        member.addRole(rolid);
    }
    else member.roles.forEach(role => member.removeRole(role));
        const embed  = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/550531815249805312/678679430314459207/index.jpg")
    .setAuthor('Jail Operasyonu')
    .setDescription(`Kullanıcının Tüm Rolleri Alındı Ve \`❌︱Cezalı/Jail\` Rolü Verildi`)
    .setFooter(`Komutu Kullanan (${message.author.username})`)
    .setColor("RED")
    return message.channel.sendEmbed(embed);
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ban"],
    permLevel: 4
};

exports.help = {
    name: "jail",
    description: 'Birini jaillersiniz.',
    usage: 'jail <kullanıcı>'
};