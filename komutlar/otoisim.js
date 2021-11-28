const Discord = require('discord.js');
const { Database } = require("wio.db")
const  kayıtverileri = new Database("./DataBase/Database");
const ayarlar = require('../ayarlar.json');
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => {

  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
  .setTitle('Örnek Kullanımlar;')
  .setDescription(`**\`${prefix}oto-isim +tag +kullanıcı\`

  \`${prefix}oto-isim +tag İsim | Yaş\`

  \`${prefix}tag ayarla ♥\`

  \`${prefix}otoisim sıfırla\`  

Dikkat! Tag Ayarlanmadıysa Hatalı Olucaktır **`));



  kayıtverileri.set(`otoisim.${message.guild.id}`, args.slice(0).join(' '));
 
   message.channel.send(new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle(`${client.user.username} Oto İsim Ayarlandı `)
  .setColor(`${renk}`)
  .setThumbnail(client.user.avatarURL)
  .setDescription(`${onay} Sunucuya Giren Kullanıcıların İsimleri Otomatik Olarak Ayarlandı! | \`${prefix}otoisim sıfırla\``)
  .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
  );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oto-isim'
};