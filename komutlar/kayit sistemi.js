const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix
let renk = ayarlar.renk
let mortac = ayarlar.mortac


exports.run = (client, message) => {

 const embed = new Discord.MessageEmbed()
.setColor(`${renk}`)
.setAuthor(`${client.user.username} Kayıt Sistemi`)
.setTimestamp()
.setDescription(`
> \`${prefix}alınacak-rol\` -> **Kayıt Edilen Kişiden Alınacak Rolü Ayarlar.**

> \`${prefix}tag ayarla\` -> **Kayıt Edilen Kişiye Verilecek Tagı Ayarlar.**

> \`${prefix}kayıt-kanal\` -> **Kayıtın Yapılacağı Kanalı Belirlersiniz.**

> \`${prefix}kayıt-log\` -> **Kayıt Logunun Gideceği Kanalı Ayarlar.**

> \`${prefix}kayıt-hg\` -> **Gelen Kullanıcılara Kayıt Bilgisi Verir.**

> \`${prefix}kayıt-yetkili\` -> **Kayıt Edebilecek Yetkiyi Ayarlar.**

> \`${prefix}erkek-rol\` -> **Kayıt Edilince Verilecek Erkek Rolü Ayarlar.**

> \`${prefix}kız-rol\` -> **Kayıt Edilince Verilecek Kız Rolü Ayarlar.**

> \`${prefix}otorol\` -> **Sunucuya Girenlere Otomatik Kayıtsız Rolü Vermeyi Ayarlar.**

> \`${prefix}kız\` -> **Kız Kullanıcıları Kayıt Edersiniz.**

> \`${prefix}erkek\` -> **Erkek Kullanıcıları Kayıt Edersiniz.**

> \`${prefix}tag-alana-rol\` -> **Tag Alana Rol Sistemi / Yardım Menüsü.**

> \`${prefix}isimdeğiştir\` -> **Herhangi Bir İsim Hatasında Kullanınız.**

> \`${prefix}kayıt-sistemi2\` -> **2. Menüye Geçiniz.**

> \`Komutu yalnış ayarladıysanız ${prefix}komutismi sıfırla yazmaniz yeterlidir\``)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/811414430898323496/811425709665812531/standard_3.gif")
message.channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};