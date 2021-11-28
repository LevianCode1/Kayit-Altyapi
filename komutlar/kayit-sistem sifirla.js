const discord = require('discord.js')
const { Database } = require("wio.db")
const  kayıtverileri = new Database("./DataBase/Database");
const ayarlar = require('../ayarlar.json')
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
let prefix = ayarlar.prefix
exports.run = async(client, message, args) => {
let erkekrol = await kayıtverileri.fetch(`erkekrol.${message.guild.id}`)
let tag = await kayıtverileri.fetch(`tag.${message.guild.id}`)
let otomatikrol = await kayıtverileri.fetch(`otomatikrol.${message.guild.id}`)
let kızrol = await kayıtverileri.fetch(`kızrol.${message.guild.id}`)
let kayıtkanal = await kayıtverileri.fetch(`kayıtkanal.${message.guild.id}`)
let alınacakrol = await kayıtverileri.fetch(`alınacakrol.${message.guild.id}`)
let kayıthg = await kayıtverileri.fetch(`kayıthg.${message.guild.id}`)
let kayıtçırol = await kayıtverileri.fetch(`kayıtçırol.${message.guild.id}`)
let tagrol = await kayıtverileri.fetch(`tagrol.${message.guild.id}`)
let taglog = await kayıtverileri.fetch(`taglog.${message.guild.id}`)
let otoisim = await kayıtverileri.fetch(`otoisim.${message.guild.id}`)
let yasaklıtag = await kayıtverileri.fetch(`yasaklı-tag.${message.guild.id}`)
let kayıtlogkanal = await kayıtverileri.fetch(`kayıtlogkanal.${message.guild.id}`)
    if(!erkekrol) return message.channel.send(`${red} **\`Erkek rolü\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!tag) return message.channel.send(`${red} Sunucu **\`Tagı\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!otomatikrol) return message.channel.send(`${red} **\`Oto rol\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!kızrol) return message.channel.send(`${red} **\`Kadın rolü\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!kayıtkanal) return message.channel.send(`${red} **\`Kayıt kanalı\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!alınacakrol) return message.channel.send(`${red} **\`Alınacak rol\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!kayıthg) return message.channel.send(`${red} **\`Kayıt hoş geldin kanalı\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!kayıtçırol) return message.channel.send(`${red} **\`Yetkili rolü\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!tagrol) return message.channel.send(`${red} **\`Tag rolü\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!taglog) return message.channel.send(`${red} **\`Tag log kanalı\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!otoisim) return message.channel.send(`${red} **\`Oto isim\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!yasaklıtag) return message.channel.send(`${red} **\`Yasaklı tag\`** ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));
    if(!kayıtlogkanal) return message.channel.send(`${red} **\`Kayıt log kanalı\`** rolü ayarlı olmadığı için **\`${prefix}kayıt-sistem sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));


if (args[0] === "sıfırla" || args[0] === "kapat") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setColor(`${renk}`)
.setDescription(`${onay} Kayıt Sistemi Sıfırlandı`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
kayıtverileri.delete(`erkekrol.${message.guild.id}`)
kayıtverileri.delete(`tag.${message.guild.id}`)
kayıtverileri.delete(`otomatikrol.${message.guild.id}`)
kayıtverileri.delete(`kızrol.${message.guild.id}`)
kayıtverileri.delete(`kayıtkanal.${message.guild.id}`)
kayıtverileri.delete(`alınacakrol.${message.guild.id}`)
kayıtverileri.delete(`kayıthg.${message.guild.id}`)
kayıtverileri.delete(`kayıtçırol.${message.guild.id}`)
kayıtverileri.delete(`tagrol.${message.guild.id}`)
kayıtverileri.delete(`taglog.${message.guild.id}`)
kayıtverileri.delete(`otoisim.${message.guild.id}`)
kayıtverileri.delete(`yasaklı-tag.${message.guild.id}`)
kayıtverileri.delete(`kayıtlogkanal.${message.guild.id}`)
return;
}
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-sistem',
}