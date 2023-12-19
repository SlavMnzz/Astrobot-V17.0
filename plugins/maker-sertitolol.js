import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Teksnya?'
  let res = `https://zeltoria.site/api/maker/tolol?q=${text}`
  conn.sendFile(m.chat, res, 'yae.jpg', `Nih Kak Sertifikatnya`, m, false)
}
handler.help = ['sertitolol']
handler.tags = ['maker']
handler.command = /^(sertitolol)$/i
handler.register = false

handler.limit = true

export default handler
