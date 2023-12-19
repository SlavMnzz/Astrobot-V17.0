/*import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorbot}`, `${await conn.getName(nomorbot+'@s.whatsapp.net')}`, `💌 No Own + BOT`, `Not Famous`, `xmannxyz@mann.dev`, `🇮🇩 Indonesia`, `📍 https://www.xmnzzxy.sh/md.co`, `👤 Own make nomer bot bg,lgi ga ada nokos 😁`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 Whatsapp Bot`, `📵 Dont Spam`, `support@ryzendesu.com`, `🇮🇩 Indonesia`, `📍 https://github.com/ShirokamiRyzen/Astro-MD`, `Hanya bot biasa yang kadang error ☺`]
  ], fkontak)
  await m.reply(`Hello @${m.sender.split(`@`)[0]} Thats my owner, dont spam or i will block u`)
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler*/