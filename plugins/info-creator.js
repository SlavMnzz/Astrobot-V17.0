function handler(m) {
  
  const kontak = {
	"displayName": '@frdyfrmnsyh.dev',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:𝓕𝓮𝓻𝓭𝔂 𝓕𝓲𝓻𝓶𝓪𝓷𝓼𝔂𝓪𝓱\nitem1.TEL;waid=111111111111:111111111111\nitem1.X-ABLabel:\nIni Developer-Creator-Owner\nURL;Email Owner:https://www.xcode.xy.inc\nORG:NO SPAM !\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator|dev|developer)$/i

export default handler