const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
exports.run = (client, message, args) => {


    const embed = new Discord.MessageEmbed()

 .setAuthor(`${client.user.username} Yardım Menüsü`)
 .setColor(`BLACK`)
 .setDescription(`

 > \`${prefix}kayıt-sistemi -> Kayıt Komutlarını gösterir.\`

 > \`${prefix}koruma-sistemi -> Koruma Komutlarını gösterir.\`

 > \`${prefix}moderasyon -> Moderasyon Komutlarını gösterir.\`
 
 > \`${prefix}davet -> Botun Davetini ve Destek Sunucunu gösterir.\`

 > **NOT: Botun Çalışması İçin Levian Rolünü En Üste Çekiniz**
  `)
 .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/811414430898323496/811425709665812531/standard_3.gif")

message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Yardım","yardim","Yardim"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',   
  description: '',
  usage: ''
};