const discord = require('discord.js')
const { Database } = require("wio.db")
const  kayıtverileri = new Database("./DataBase/Database");
const ayarlar = require('../ayarlar.json')
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
let prefix = ayarlar.prefix
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Oto Rol Sıfırla `)
.setColor(`${renk}`)
.setDescription(`${onay} Sunucu İçin Ayarladığınız Oto Rolü Başarıyla Sıfırlandı !`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
kayıtverileri.delete(`otomatikrol.${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Oto Rol Ayarla `)
.setColor(`${renk}`)
.setDescription(`${red} Ayarlayacağınız Oto Rolünü Belirtiniz !(Önerilen: \`Kayitsiz\`)`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
kayıtverileri.set(`otomatikrol.${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Oto Rol Ayarlandı `)
.setColor(`${renk}`)
.setDescription(`${onay} Oto Rol Başarıyla ${rol} Olarak Ayarlandı ! | \`${prefix}otorol sıfırla\``)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'otorol',
  description: 'Oto rolünü ayarlar',
  usage: ''
}