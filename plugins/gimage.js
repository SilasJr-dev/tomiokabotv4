let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) return m.reply('Cari apa?')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('404 Not Found')
  conn.sendFile(m.chat, url, 'gimage', `
*── 「 GOOGLE IMAGEM 」 ──*

${text}
➸ *width*: ${width}
➸ *height*: ${height}
`.trim(), m)
}
handler.help = ['image <pesquisa>']
handler.tags = ['internet']
handler.command = /^(gimage|image|img)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
