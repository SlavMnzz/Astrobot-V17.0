let handler = async (m, { conn, usedPrefix }) => {
	let donasi = `
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi 〕
├ Dana : minta own
├ Gopay : minta own
├ Pulsa : minta own
└────
Berapapun donasi kalian akan sangat berarti 👍

Terimakasih :D
`
await conn.sendFile(m.chat, pay.qris, 'payment.jpg', donasi, m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
export default handler