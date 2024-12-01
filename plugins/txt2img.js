import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) return m.reply("Textnya?");
    conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	let urls = `https://btch.us.kg/ai/text2img?text=${text}`
	let url = urls
	await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
	conn.sendFile(m.chat, url, null, `hasil txt2img dari ${text}`, m)
}
handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img)$/i
handler.premium = false
export default handler