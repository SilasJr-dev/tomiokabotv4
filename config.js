let fs = require('fs')

global.owner = ['554497433716'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  melcanz: 'httpa://melcanz.com',
  lol: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'pkebgk8248jskrkfm',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.stiker_wait = 'Fazendo sua figurinha...'
global.packname = `âŽ āĢŠÛŠ ðž ŨâðŪðððððð:
âĪ·   ęŠķÍĒÍĒÍĒððÍĒðŊ ððŊÍĒððÍĒðŊððęŦ          

ęš ŨâðĖ· ðððĄðð§ ððĪðĒ ðĪ ðĐðĪðĒððĪð ð: 
âĪ·   (44) 99743-3716         `
global.author = `âŽ āĢŠÛŠ âĻ ŨâÉĒáī: 
linktr.ee/tokibot         âē

 ęš ŨâðĪĖ· ð―ðð: 
(44) 99822-0867        âē`
global.email = 'tiotomiokaofc@gmail.com'
global.wm = 'âðĨâĒâðððððððž ð―ðâððĨâ'
global.media = 'https://telegra.ph/file/5d45a3d1e12726d98c5e4.jpg'

global.wait = '_*Aguarde.. em processo..*_'
global.eror = '_*Servidor com erro!!*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: 'âïļ',
      money: 'ðĩ',
      potion: 'ðĨĪ',
      diamond: 'ð',
      common: 'ðĶ',
      uncommon: 'ð',
      mythic: 'ðģïļ',
      legendary: 'ðïļ',
      pet: 'ð',
      sampah: 'ð',
      armor: 'ðĨž',
      sword: 'âïļ',
      kayu: 'ðŠĩ',
      batu: 'ðŠĻ',
      string: 'ðļïļ',
      kuda: 'ð',
      kucing: 'ð' ,
      anjing: 'ð',
      petFood: 'ð',
      gold: 'ð',
      emerald: 'ð'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
