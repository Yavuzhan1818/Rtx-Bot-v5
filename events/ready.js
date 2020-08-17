// -Bot giriş kısmı- 
module.exports = (client) => {

var oynuyorkısımları = [
"Rtx Bot 32 Sunucu 22442 Kullanıcı Hizmet Veriyor",
"c!davet",
"c!davet c!site c!yapımcım"
]


setInterval(function() {

        var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
       client.user.setActivity(oynuyorkısımları[random], { type: '' });
        }, 2 * 3000);

    console.log("Bot başarılı bir şekilde giriş yaptı.")
}