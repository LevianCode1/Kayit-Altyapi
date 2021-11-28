const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db")
const  kayıtverileri = new Database("./DataBase/Database");
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));
    if(!args[0]){
        return message.channel.send('Ayarla, Sifirla?');
    }
if(args[0] === "ayarla") {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));
let alpandhuso = args.slice(1).join(' ');
if(!alpandhuso) return message.reply(`${red} **Lütfen Ayarlamak İstediğiniz Tag\`ı İşaretleyin !**`)
kayıtverileri.set(`tag.${message.guild.id}`, alpandhuso)
message.channel.send(`\`${alpandhuso}\` **Olarak Ayarlandı.** ${onay} | \`${prefix}tag sıfırla\``)
} 
if(args[0] === "sıfırla") {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));
kayıtverileri.delete(`tag.${message.guild.id}`)  
message.channel.send(`**Tag Başarılı Bir Şekilde Sıfırlandı** ${onay}`)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'tag',
  usage: ' başvuru'
}