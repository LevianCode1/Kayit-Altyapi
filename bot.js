const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);


//Data Base
//Data Base
//Data Base
const { Database } = require("wio.db")
const  kayıtverileri = new Database("./DataBase/Database");
//Data Base
//Data Base
//Data Base
//------------------Renkler-Emojiler
//------------------Renkler-Emojiler
//------------------Renkler-Emojiler
const renk = ayarlar.renk
const botadi = ayarlar.botadi
const desteksunucum = ayarlar.desteksunucum
const kirmizi = ayarlar.kirmizi
const yesil = ayarlar.yesil
const kalpsiyah = ayarlar.kalpsiyah
//------------------Renkler-Emojiler
//------------------Renkler-Emojiler
//------------------Renkler-Emojiler
const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token).then(c => console.log(`${client.user.tag} olarak giriş yapıldı!`)).catch(err => console.error("Bota giriş yapılırken başarısız olundu!"));

// Levian Kayit
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let kanal = kayıtverileri.fetch(`kayıthg.${member.guild.id}`);
  let kayıtçı = kayıtverileri.fetch(`kayıtçırol.${member.guild.id}`);
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;

  let user = client.users.cache.get(member.id);
  require("moment-duration-format");

var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `0`,
            '1': `1`,
            '2': `2`,
            '3': `3`,////Isterseniz Emoji Koya Bilirsiniz {'1': `Emoji`}
            '4': `4`,
            '5': `5>`,
            '6': `6`,
            '7': `7`,
            '8': `8`,
            '9': `9`}[d];})}
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const ayyy = moment.duration(kurulus).format("M");
  var kontrol = [];


let olumlu = ayarlar.olumlu
let olumsuz = ayarlar.olumsuz
  if (ayyy < 1) {
    kontrol = `**Şüpheli!** ${olumsuz}`;
  }
  if (ayyy > 1) {
    kontrol = `**Güvenilir!** ${olumlu}`;
  }

  if (!kanal) return;

  ///////////////////////

let loading = ayarlar.loading






  let randomgif = [ 
             "https://cdn.discordapp.com/attachments/811414430898323496/811419397209718834/Baslksz-1_kopya.png"];

  ///////////////////

  const embed = new Discord.MessageEmbed()
    .setTitle(`Levian | Kayıt Sistemi`)
    .setColor(`${renk}`)
    .setImage(randomgif[Math.floor(Math.random() * randomgif.length)])
    .setThumbnail(

    )

    .setDescription(
      `${loading} **Sunucumuza hoşgeldin** ${member.user} \n **Hesap oluşturulma tarihi:** ${moment(
        user.createdAt
      ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
        user.createdAt
      ).format(
        "YYYY HH:mm:ss"
       )} \n  **Güvenilirlik durumu:** ${kontrol} \n <:8263blurplemembers:914241634709950504>  **Seninle birlikte ${üyesayısı} kişiyiz** \n <:9098blurpleannouncements:914241634122752020> **Kayıt olmak için yetkilileri beklemen yeterlidir.
Yetkililer sizinle ilgilenecektir.**

  `
    );

  
  client.channels.cache.get(kanal).send(`<@&${kayıtçı}> ${member} <:1032blurplebell:914241634185662475>`, embed);
});
//Levian Kayit Son

//Levian OtoRol 
client.on("guildMemberAdd", async member => {
  let rol = await kayıtverileri.fetch(`otomatikrol.${member.guild.id}`);
  let mesaj = kayıtverileri.fetch(`otoRM.${member.guild.id}`);
  if (!rol) return;

  if (!mesaj) {
    return member.roles.add(rol);
  }

});
//Levian Otorol Son 




//tag etkket
client.on('message', message => {
  let tag = kayıtverileri.get(`tag.${message.guild.id}`)
  if (message.content === `tag`) {
    message.channel.send(`\`${tag}\``).then(msg => msg.delete({timeout:30000}));
  }
});
client.on('message', message => {
  let tag = kayıtverileri.get(`tag.${message.guild.id}`)
  if (message.content === `.tag`) {
    message.channel.send(`\`${tag}\``).then(msg => msg.delete({timeout:30000}));
  }
})
/*client.on('message', message => {
  let tag = db.get(`tag_${message.guild.id}`)
  if (message.content === `!tag`) {
    message.channel.send(`\`${tag}\``).then(msg => msg.delete({timeout:10000}));
  }
});
client.on('message', message => {
  let tag = db.get(`tag_${message.guild.id}`)
  if (message.content === `-tag`) {
    message.channel.send(`\`${tag}\``).then(msg => msg.delete({timeout:10000}));
  }
});*/
//tag son
//koruma 


//tag alana rol
client.on("userUpdate", (oldUser, newUser) => {
  client.guilds.cache.forEach(async guild => {
    if (!guild.members.cache.get(newUser.id)) return;
    const tagFetch = await kayıtverileri.fetch(`tag.${guild.id}`);
    const roleFetch = await kayıtverileri.fetch(`tagrol.${guild.id}`);
    const logFetch = await kayıtverileri.fetch(`taglog.${guild.id}`);
    if (!tagFetch || !roleFetch || !logFetch) return;
    let tag = tagFetch;
    let role = guild.roles.cache.get(roleFetch);
    let log = guild.channels.cache.get(logFetch);
    if (oldUser.username === newUser.username) return;
    if (newUser.username.includes(tag) && !oldUser.username.includes(tag)) {
      log.send(
        new Discord.MessageEmbed()
          .setTitle("Levian - Tag Alındı")
          .setColor(`${yesil}`)
          .setDescription(
            `${newUser} **Aramıza hoşgeldin. \`${tag}\` tagınımızı aldığı için ${role} rolü verildi!**`
          )
      );
      guild.members.cache.get(newUser.id).roles.add(role.id);
    }
    if (oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
      log.send(
        new Discord.MessageEmbed()
          .setTitle("Levian - Tag Çıkarıldı")
          .setColor(`${kirmizi}`)
          .setDescription(
            `${newUser} **Aramızdan ayrıldı. \`${tag}\` tagınımızı çıkardığı için ${role} rolü alındı!**`
          )
      );
      guild.members.cache.get(newUser.id).roles.remove(role.id);
    }
  });
});

//Tag alana rol
//Oto Isım 
client.on("guildMemberAdd", async member => {
  let user = member.user;
  let guild = member.guild;

  const systemTagData = await kayıtverileri.fetch(`tag.${guild.id}`);
  const systemNameData = await kayıtverileri.fetch(`otoisim.${guild.id}`);
  if (!systemNameData) return;

  let systemTag;
  if (systemTagData) systemTag = String(systemTagData);

  let replacedName;
  if (systemTag) {
    replacedName = systemNameData
      .replace("+kullanıcı", user.username)
      .replace("+tag", systemTag);
  } else {
    replacedName = systemNameData.replace("+kullanıcı", user.username);
  }

  member.setNickname(replacedName);
  
});
//Oto Isım 
//Yasakli Tag
client.on('guildMemberAdd', async member => {
let guild = member.guild; 
let user = guild.members.cache.get(member.id);

const tag = await kayıtverileri.fetch(`yasaklı-tag.${guild.id}`)
const sayı = await kayıtverileri.fetch(`atıldın.${guild.id}.${user.id}`)
if(user.user.username.includes(tag)) {
  
if(sayı === null) {
await db.add(`atıldın.${guild.id}.${user.id}`, 1)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL)
.setDescription(`**${guild.name}** unucumuzun yasaklı tagında bulunduğunuz için atıldınız, tekrar giriş yapmayı denerseniz **yasaklanacaksınız**!`))
await user.kick() }

if(sayı === 1) {
await db.delete(`atıldın.${guild.id}.${user.id}`)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL)
.setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atılmıştınız, tekrar giriş yapmayı denediğiniz için **${guild.name}** sunucusundan kalıcı olarak **yasaklandınız**!`))
await user.ban() } }
  
})
//Yasakli Tag
const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
