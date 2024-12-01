import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) return m.reply("Linknya?");
    conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	let urls = `https://btch.us.kg/sspc?url=${text}`
	conn.sendFile(m.chat, urls, null, `hasil SS web dari web ${text}`, m)
	await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^(ssweb)$/i
handler.premium = false
export default handler