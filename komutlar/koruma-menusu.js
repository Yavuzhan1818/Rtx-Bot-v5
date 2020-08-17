const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()

const mhelp = new Discord.RichEmbed()
.setColor("#5ab1bb")
.setTitle("Rtx Bot Koruma Komutları")
.addField(" <a:nitro2:740518407673217084> c!ban istediğiniz Kişiyi Etiket Sebep Girip Banlıya Bilirsiniz")
.addField(" <a:yildiz2:740518065166352434> c!yavaş-mod İstediginiz Kanala Yavaş Yazma Yapabilirsiniz")
.addField(" <a:fire:740518061819297839> c!reklam-taraması Etiketlediginiz Kişinin Oynuyor Veya İsminde Reklam Varmı Die Kontrol Eder")
.addField(" <a:tac1:740517358874919022> c!mute Yazarak Etiketlediginiz Kişiye 1sn 1dk 1saat Sureli Mute Atabilirsiniz")
.addField(" <a:bizburdayizzzz:740517297764040726> c!link-engelle Yazarak Link Engel Açarsınız")
.addField(" <a:yan2:740517134454620261> c!güvenlik Yazarak Bir Kanal Etiketliyerek Güvenlik Kanalı Yaparsınız")
.addField(" <a:elmas:740517295138275368> c!ban-bilgi Biri Kişiyi Etiketlerseniz Ban Durumunu Kontrol Eder")
.addField(" <a:hype1:740517287986987018> c!kick Bir Kişi Etiketliyip c!kick Yazarsanız O Kişiyi Sunucudan Atar")
.addField(" <a:sonsuz:740517279229542471> c!bansay Sunucuda Kaç Kişi Banlandığını Gösterir ")
.setImage("https://cdn.discordapp.com/attachments/655459488236568597/669939737431375872/cizgi.gif") 
message.channel.sendEmbed(mhelp)
}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'koruma', 
    description: 'rtx bot koruma menusu',
    usage: 'help'
  };