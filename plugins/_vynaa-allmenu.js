import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
let tags = {
  'main': 'ᴍᴀɪɴ ᴍᴇɴᴜ',
  'game': 'ɢᴀᴍᴇ ᴍᴇɴᴜ',
  'rpg': 'ʀᴘɢ ᴍᴇɴᴜ',
  'xp': 'ᴇxᴘ - ʟɪᴍɪᴛ',
  'sticker': 'sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ',
  'kerang': 'ᴋᴇʀᴀɴɢ ᴍᴇɴᴜ',
  'quotes': 'ǫᴏᴜᴛᴇs ᴍᴇɴᴜ',
  'fun': 'ғᴜɴ ᴍᴇɴᴜ',
  'anime': 'ᴀɴɪᴍᴇ ᴍᴇɴᴜ',
  'adminry': 'ᴀᴅᴍɪɴ ᴍᴇɴᴜ',
  'group': 'ɢʀᴏᴜᴘ ᴍᴇɴᴜ',
  'store': 'sᴛᴏʀᴇ',
  'vote': 'ᴠᴏᴛɪɴɢ ᴍᴇɴᴜ',
  'absen': 'ᴀʙsᴇɴ ᴍᴇɴᴜ',
  'premium': 'ᴘʀᴇᴍɪᴜᴍ ᴍᴇɴᴜ',
  'nsfw': 'ɴsғᴡ',
  'anonymous': 'ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ',
  'internet': 'ɪɴᴛᴇʀɴᴇᴛ ᴍᴇɴᴜ',
  'genshin': 'ɢᴇɴsʜɪɴ ᴍᴇɴᴜ',
  'news': 'ɴᴇᴡs ᴍᴇɴᴜ',
  'downloader': 'ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ',
  'search': 'sᴇᴀʀᴄʜɪɴɢ ᴍᴇɴᴜ',
  'tools': 'ᴛᴏᴏʟs ᴍᴇɴᴜ',
  'primbon': 'ᴘʀɪᴍʙᴏɴ',
  'nulis': 'ᴍᴀɢᴇʀ ɴᴜʟɪs',
  'audio': 'ᴀᴜᴅɪᴏ',
  'maker': 'ᴍᴀᴋᴇʀ ᴍᴇɴᴜ',
  'database': 'ᴅᴀᴛᴀʙᴀsᴇ',
  'quran': 'ᴀʟ-ǫᴜʀᴀɴ ᴍᴇɴᴜ',
  'owner': 'ᴏᴡɴᴇʀ ᴍᴇɴᴜ', 
  'info': 'ɪɴғᴏ ᴍᴇɴᴜ',
  'random': 'ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ',
  'sound': 'sᴏᴜɴᴅ ᴍᴇɴᴜ',
}
const defaultMenu = {
  before: `
*ʜᴀɪ %name 👋.*
ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ꜱɪꜱᴛᴇᴍ ᴏᴛᴏᴍᴀᴛɪꜱ [ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ] 
ʏᴀɴɢ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ
ꜱᴇᴘᴇʀᴛɪ ᴍᴇɴᴄᴀʀɪ, ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴅᴀᴛᴀ/ɪɴғᴏʀᴍᴀꜱɪ.


乂  *ᴜ s ᴇ ʀ - ꜱ ᴛ ᴀ ᴛ ɪ ꜱ ᴛ ɪ ᴄ*

 ┌───────
 ┊• ᴜsᴇʀɴᴀᴍᴇ: %name
 ┊• ᴛᴀɢs: %tag
 ┊• sᴛᴀᴛᴜs: %prem
 ┊• ʟɪᴍɪᴛ: %limit
 ┊• ʀᴏʟᴇ: %role
 ┊• ʟᴇᴠᴇʟ: %level
 ╰────────────

ᴊɪᴋᴀ ᴀɴᴅᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ ᴇʀʀᴏʀ ᴀᴛᴀᴜ ɪɴɢɪɴ ᴍᴇɴɪɴɢᴋᴀᴛᴋᴀɴ ᴘᴀᴋᴇᴛ ᴘʀᴇᴍɪᴜᴍ ᴀɴᴅᴀ,ꜱɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ .ᴏᴡɴᴇʀ
%readmore
`.trimStart(),
  header: ` ┌── *%category*`,
  body: ' ┊• %cmd %islimit %isPremium ',
  footer: ` ╰──────────`,
  after: '\n*ᴀsᴛʀᴏ-ʙᴏᴛᴢ sᴛᴀʙʟᴇ ᴠᴇʀsɪᴏɴ*',
}
let handler = async (m, { conn, usedPrefix, __dirname }) => {
  try {
    //conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let tag = `@${m.sender.split('@')[0]}`
    let image = elainajpg.getRandom()
    let user = global.db.data.users[m.sender]
    let limit = user.premiumTime >= 1 ? 'Unlimited' : user.limit
    let name = `${user.registered ? user.name : conn.getName(m.sender)}`
    let status = `${m.sender.split`@`[0] == info.nomorown ? 'Developer' : user.premiumTime >= 1 ? 'Premium User' : user.level >= 1000 ? 'Elite User' : 'Free User'}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '🅛' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: usedPrefix, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, tag, status, wib, 
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: wish(),
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 999999,
pageCount: 10000,
caption: text,
contextInfo: {
externalAdReply: {
title: "ᴀsᴛʀᴏʙᴏᴛᴢ sᴛᴀʙʟᴇ ᴠᴇʀsɪᴏɴ",
body: '@xғ.ғɪʀᴍᴀɴɴ.ᴅᴇᴠ',
thumbnail: fs.readFileSync('./media/thumbnail.jpg'),
sourceUrl: "http://처녀사냥꾼처녀냥",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    /*await conn.adReply(m.chat, text.trim(), wish() + ' ' + name, '', fs.readFileSync('./media/thumbnail.jpg'), link.web, m)*/
          let vn = "./vn/yowaimo.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
  } catch (e) {
    throw e
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = /^(allmenu|all)$/i
handler.register = false
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi')
  }
  if (time >= 11) {
    wishloc = ('Selamat Siang')
  }
  if (time >= 15) {
    wishloc = ('️Selamat Sore')
  }
  if (time >= 18) {
  	wishloc = ('Selamat Malam')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam')
  }
  return wishloc
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}