import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, `https://telegra.ph/file/eff71f6e19c230f5e77c9.png`, global.wms, global.wmss)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
} 

handler.customPrefix = /^(kontol|asu|asw|anjj|kwontol|bangka|goblok|bego|tolol|lol|bgst|kntl|pepek|mmk|ppk|jnck|anj|bangsat|bangsad|bgsd|ngntd|memek|jembut|jancok|fuck|ajg|anjing|ngentod)$/i
handler.command = new RegExp()

export default handler