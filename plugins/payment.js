import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `
---- *PAYMENT* ----

- DANA 
- OVO
- GOPAY
- PULSA IM3
- QRIS ? MINTA OWNER

NOMOR PEMBAYARAN / QRIS ALLPAY MINTA KEPADA OWNER ! (.owner)

jika sudah melakukan pembayaran harap kirik bukti transfer untuk dikonfirmasi ‼️`
await conn.sendFile(m.chat, fs.readFileSync('./media/payment.jpg'), 'payment.jpg', payi, m)
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
export default handler
