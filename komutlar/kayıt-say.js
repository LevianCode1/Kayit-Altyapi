const Discord = require('discord.js');
const { Database } = require(`wio.db`)
const  kayıtverileri = new Database("./DataBase/Database");
const ayarlar = require('../ayarlar.json')
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
exports.run = async (client, message, args) => {
let tag = kayıtverileri.get(`tag.${message.guild.id}`)

const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  
let count = 0;
  
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

const embed = new Discord.MessageEmbed()

.setColor(`${renk}`)

.addField(`Sunucudaki üye sayısı <a:Kalp:811478630706053140>`, message.guild.memberCount)
.addField(`Çevrimiçi üye sayısı <a:Kalp:811478630706053140>`, message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== `offline`).size)
.addField(`Seslideki üye sayısı <a:Kalp:811478630706053140>`, count)
.addField(`Tagdaki üye sayısı <a:Kalp:811478630706053140>`, message.guild.members.cache.filter(m => m.user.username.includes(tag)).size) // tagınız yoksa bu satrı silin

.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
    
message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sy'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};