function handler(m) {
  
  const kontak = {
	"displayName": 'ɴɪʜ ᴏᴡɴᴇʀ ʙᴀɴɢ',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:@xғ.ғɪʀᴍᴀɴ.ᴅᴇᴠ\nitem1.TEL;waid=62857059457512:62857059457512\nitem1.X-ABLabel:\nᴛʜɪs ɪs ᴏᴡɴᴇʀ\nURL;Email Owner:@xf.firmansyah.dev@gmail.com\nORG:ᴄʜᴀᴛ ɢᴀ ᴊᴇʟᴀs ʙʟᴏᴋ\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler