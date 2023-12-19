let handler = async (m, { conn }) => {
conn.reply(m.chat, `_List Group AstroMD_
*Offcial Group*
https://chat.whatsapp.com/IcDg7L47FtiIsc7Spt4WZy

*Discussion BotGroup*
https://chat.whatsapp.com/H1y1QmjuxQ16eAvMNv9UUs
`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
