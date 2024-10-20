import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `MASUKAN LINK!!!\n*Contoh:* ${usedPrefix}${command} https://www.mediafire.com/file/...`;
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
	let ouh = await fetch(`https://widipe.com/mediafire?link=${text}`)
  let gyh = await ouh.json()
	await conn.sendFile(m.chat, gyh.result.url, `${gyh.result.filename}`, `*💌 Name:* ${gyh.result.filename}\n*📊 Size:* ${gyh.result.filesizeH}\n*🗂️ Extension:* ${gyh.result.ext}\n*📨 Uploaded:* ${gyh.result.upload_date}`, m)
	await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.premium = false
handler.register = true
export default handler