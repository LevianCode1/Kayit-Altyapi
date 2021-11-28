const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
let renk = ayarlar.renk
let mortac = ayarlar.mortac



exports.run = function(client, message) {
	
const embed = new Discord.MessageEmbed()
.setColor(`${renk}`)
.setAuthor(`${client.user.username} Tag Alana Rol Sistemi`)
.setTimestamp()
.setDescription(`

> \`${prefix}tag ayarla\` -> **Tagı Belitirsiniz Ve O Taga Rol Ayarladığınız Rolü Verir.**

> \`${prefix}tag-log\` -> **Tag alan & çıkaran üyeleri kanala bilgi olarak gönderir.**

> \`${prefix}tag-rol\` -> **Sunucunuz da **tag** alan üyeye verilecek rolü etiketle.**

> \`Komutu yalnış ayarladıysanız ${prefix}komutismi sıfırla yazmaniz yeterlidir\`

	`)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'tag-alana-rol',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};