const discord = require('discord.js')
const { Database } = require("wio.db")
const  kayıtverileri = new Database("./DataBase/Database");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
let red = ayarlar.red
let onay = ayarlar.onay
let onay2 = ayarlar.onay2
let yildiz = ayarlar.yildiz
let kalp = ayarlar.kalp
let hypesquad = ayarlar.hypesquad
let renk = ayarlar.renk
exports.run = async(client, message, args) => {
//LETLER
let kayıtçı2 = kayıtverileri.fetch(`kayıtçırol.${message.guild.id}`)  
let kanal = kayıtverileri.fetch(`kayıtkanal.${message.guild.id}`)
let alınacakrol = kayıtverileri.fetch(`alınacakrol.${message.guild.id}`)
let erkekrol = kayıtverileri.fetch(`erkekrol.${message.guild.id}`)
let ekrol = kayıtverileri.fetch(`ekrol.${message.guild.id}`)
let kayıtçı = kayıtverileri.fetch(`kayıtçırol.${message.guild.id}`)  
let tag = kayıtverileri.get(`tag.${message.guild.id}`)
let log = kayıtverileri.fetch(`kayıtlogkanal.${message.guild.id}`);
let kayıtdata = kayıtverileri.fetch(`kayıtsayı.${message.author.id}`)
//LETLER
//IFLER
if(!kayıtçı2) return message.channel.send(`${red} Kayıt Sistemi Ayarlanmadığı İçin Komutu Kullanılamaz ! | \`${prefix}kayıt-sistemi\``)
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`${red} Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım ! `)
if(message.channel.id !== kanal) return message.channel.send(`${red} Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `)
if(!tag) return message.channel.send(`${red} Tag Ayarlanmadığı İçin Kayıt Komutu Kullanılamaz ! `)
//IFLER
if (!erkekrol) return message.channel.send(`${red} Sunucuda Erkek Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! \`${prefix}erkek-rol @rol\``)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`${red} Erkek Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin !\`${prefix}erkek @Kullanıcı İsim Yaş\` `)
let isim = args[1]
if (!isim) return message.channel.send(`${red} İsmini Belirtmelisin ! `)
let yaş = args[2]
if (!yaş) return message.channel.send(`${red} Yaşını Belirtmelisin ! `)
member.setNickname(`${tag} ${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol) 
member.roles.add(ekrol) 
const başarılı = new discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setTitle(`Kayıt Yapıldı!`)
.setColor(`${renk}`)
.setDescription(`${onay2} **Kayıt Edilen Kullanıcı:** ${member} \n ${yildiz} **Verilen Rol:** <@&${erkekrol}> \n ${kalp} **Yeni İsim:** ${tag} ${isim} | ${yaş} \n ${hypesquad} **Erkek Olarak Kayıt Eden Yetkili:** <@!${message.author.id}> \n `)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(başarılı)
kayıtverileri.add(`kayıtsayı.${message.author.id}`, 1)
//Log
const saveall = new discord.MessageEmbed()
.setAuthor(`Kayıt Yapıldı!`, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`<a:Siyahtk:809908533796667445> ${member} **aramıza katıldı.

<a:SiyahKalp:813563386301775873> Verien roller **<@&${erkekrol}>**
<a:MaviKalp:813563382196207656> Yetkilinin Kayıt Sayısı: ${kayıtdata}
<a:KirmiziKalp:813563386046185482> Teyit Eden Yetkili: ${message.author}
<a:PembeKalp:813563379934298112>  Teyit Edilen Kullanıcı: ${member} ${member.id}
<a:SariKalp:813563377392549958> İsim: ${tag} ${isim} | ${yaş} **`)
.setColor(`${renk}`)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı !`)
message.guild.channels.cache.get(kayıtverileri.fetch(`kayıtlogkanal.${message.guild.id}`)).send(saveall);
//Log

}

exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}