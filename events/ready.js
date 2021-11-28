const chalk = require('chalk')
const moment = require('moment')

const ayarlar = require('../ayarlar.json')
const log = message => {
  
    console.log(`${chalk.white(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}
let prefix = ayarlar.prefix
module.exports = async client => {
    client.user.setPresence({activity:{name:`Levian `},status: 'online'})

  }