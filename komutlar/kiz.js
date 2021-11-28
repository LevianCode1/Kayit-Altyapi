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
let kayıtçı2 = kayıtverileri.fetch(`kayıtçırol.${message.guild.id}`)  
let kanal = kayıtverileri.fetch(`kayıtkanal.${message.guild.id}`)
let alınacakrol = kayıtverileri.fetch(`alınacakrol.${message.guild.id}`)
let kızrol = kayıtverileri.fetch(`kızrol.${message.guild.id}`)
let kayıtçı = kayıtverileri.fetch(`kayıtçırol.${message.guild.id}`)  
let tag = kayıtverileri.get(`tag.${message.guild.id}`)
let log = kayıtverileri.fetch(`kayıtlogkanal.${message.guild.id}`);
let kayıtdata = kayıtverileri.fetch(`kayıtsayı.${message.author.id}`)

if(!kayıtçı2) return message.channel.send(`${red} Kayıt Sistemi Ayarlanmadığı İçin Komutu Kullanılamaz ! | \`${prefix}kayıt-sistemi\``)
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`${red} Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım ! `)
if(message.channel.id !== kanal) return message.channel.send(`${red} Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `)
if(!tag) return message.channel.send(`${red} Tag Ayarlanmadığı İçin Kayıt Komutu Kullanılamaz ! | \`${prefix}tag ayarla\``)
if(!log) return message.channel.send(`${red} Log Kanalı Ayarlanmadığı İçin Komutu Kullanılamaz ! | \`${prefix}kayıt-log\``)
if (!kızrol) return message.channel.send(`${red} Sunucuda Kız Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! | \`${prefix}kız-rol @rol\``)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`${red} Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! | \`${prefix}kız @Kullanıcı İsim Yaş\` `)
let isim = args[1]
if (!isim) return message.channel.send(`${red} İsmini Belirtmelisin ! `)
let yaş = args[2]
if (!yaş) return message.channel.send(`${red} Yaşını Belirtmelisin ! `)
member.setNickname(`${tag} ${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true}))
.setTitle(`Kayıt Yapıldı!`)
.setColor(`${renk}`)
.setDescription(`${onay2} **Kayıt Edilen Kullanıcı:** ${member} \n ${yildiz} **Verilen Rol:** <@&${kızrol}> \n ${kalp} **Yeni İsim:** ${tag} ${isim} | ${yaş} \n ${hypesquad} **Kız Olarak Kayıt Eden Yetkili:** <@!${message.author.id}> \n `)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(başarılı)
kayıtverileri.add(`kayıtsayı.${message.author.id}`, 1)
//Log
const saveall = new discord.MessageEmbed()
.setAuthor(`Kayıt Yapıldı!`, client.user.avatarURL)
.setDescription(`<a:Siyahtk:809908533796667445> ${member} **aramıza katıldı.

<a:SiyahKalp:813563386301775873> Verien roller **<@&${kızrol}>**
<a:MaviKalp:813563382196207656> Yetkilinin Kayıt Sayısı: ${kayıtdata}
<a:KirmiziKalp:813563386046185482> Teyit Eden Yetkili: ${message.author}
<a:PembeKalp:813563379934298112>  Teyit Edilen Kullanıcı: ${member}
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
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}