import fs from "fs"
let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
    if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
    let user = global.db.data.users[who]
    const caption = `
📮 *PANEL PTERODAYCTL*

💎 *PT PANEL : Rp25.000*
🏅 *ADMIN : Rp15.000*
🎖️ *RESELLER : Rp5.000*

---- *PANEL LIST* ----
📦RAM 1GB || CPU 50% : 2k
📦RAM 2GB || CPU 100% : 3k
📦RAM 3GB || CPU 150% : 4k
📦RAM 4GB || CPU 200% : 5k
📦RAM 5GB || CPU 250% : 6k
📦RAM 6GB || CPU 300% : 7k
📦RAM 7GB || CPU 350% : 8k
📦RAM 8GB || CPU 400% : 9k
📦UNLIMITED RAM & CPU : 10k

*🔮ACTIVE ON : 30 DAY*

-- BENEFITS --
🔖RUN BOT GAMPANG
🔖GARANSI
🔖BOT FAST RESPON
🔖HEMAT MEMORI
🔖HEMAT KOUTA
🔖BOT ONLINE 24 JAM
🔖WEB CLOSE BOT TETAP ON


---- *OTHER* ----
🗳️SC ASTROBOT NO ENC
🗳️FIX FITUR ERROR
🗳️TAMBAH FITUR BOT
🗳️JASA RUN
🗳️JASA EDIT SC 
🗳️JASA INSTALL 
🗳️SC BOTMD NO SCAN
🗳️JB ALL GAME
`.trim()
    await conn.adReply(m.chat, caption, 'Panel Run Bot', '@xmannx.dev', fs.readFileSync('./media/panel.jpg'), '', m)
}
handler.help = ['buypanel']
handler.tags = ['info']
handler.command = /^(buypanel|panel|listpanel|price|hargapanel|panelbot)$/i

handler.register = false
handler.group = false
handler.rpg = false

export default handler