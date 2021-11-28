const { ShardingManager } = require(`discord.js`)
const ayarlar = require(`./ayarlar.json`)

const shards = new ShardingManager(`./bot.js`, { //Ana Dosyanızın İsmini Giriniz.
  token : ayarlar.token,
  totalShards : 2 }); //Shard Sayınız. (1000 Sunucuda Bir Shard Açmanız Sağlıklı Olucaktır 😉)

shards.on(`launch`, shard => {
console.log(`[${new Date().toString().split(` `, 5).join(` `)}] Shard: #${shard.id}`) })
          
shards.on(`message`, (shard, msg) => {
console.log(`[${new Date().toString().split(` `, 5).join(` `)}] #${shard.id} | ${msg._eval} | ${msg._result}`) });

shards.spawn()