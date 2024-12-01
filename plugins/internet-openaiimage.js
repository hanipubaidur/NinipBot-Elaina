import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) return m.reply("Textnya?");
    conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
 
	let url = `https://btch.us.kg/ai/text2img?text=${text}`
	conn.sendFile(m.chat, url, null, `hasil dalle dari ${text}`, m)
	await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
handler.help = ['ai-image']
handler.tags = ['internet']
handler.exp = 0;
handler.command = /^(dalle|aiimg|aiimage|ai-img|openaiimage|ai-image|img)$/i 

export default handler;
