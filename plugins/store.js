import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
let teks = `*_❏︎ SEWA & PREMIUM_*

▧ SEWA BOT
- free trial 1 hari
- 20 hari : 3.000
- 1 bulan : 5.000
- 2 bulan : 8.000
- permanen : 15.000
- permanen + premium : 25.000

❏ ︎BENEFIT SEWA KE GRUP
- fitur jaga grup
- fitur welcome
- set welcome
- bot on 24/jam
- fast respon

-------------------------------------------------

▧ UPGRADE PREMIUM
- 5 hari : 3.000
- 7 hari : 5.000
- 1 bulan : 15.000
- permanen : 20.000

❏︎ BENEFIT UP PREM
- bisa add ke grup sendiri
- bisa pakai fitur premium
- bisa add inventory rpg sesukanya
- main game diprivate chat
- limit unlimited

payment ? chat ke bot
jika sudah membayar silahkan kirim bukti transfer ke bot !

Minat? Silahkan Chat Nomor Bot Untuk Konfirmasi
https://wa.me/62857059457519
`.trim()
await conn.sendFile(m.chat, fs.readFileSync('./media/qris.jpg'), 'qris.jpeg', teks, m, false)
}
handler.help = ['sewa', 'premium']
handler.tags = ['info', 'main']
handler.command = /^(sewa|sewabot|premium|prem)$/i

export default handler