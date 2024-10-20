import fetch from 'node-fetch'

 let handler = async (m, { conn, text, usedPrefix, command }) => {
   if (!text) throw `*Example:* ${usedPrefix}${command} https://www.capcut.com/...`;
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
 let ouh = await fetch(`https://widipe.com/download/capcut?url=${text}`)
  let gyh = await ouh.json() 
	let url = `${gyh.result.video_ori}`
	conn.sendFile(m.chat, url, null, `*D E S K R I P S I :*\n${gyh.result.description}\nDIGUNAKAN SEBANYAK : ${gyh.result.digunakan}`, m)
}
handler.help = ['capcut']
handler.tags = ['downloader']
handler.command = /^(capcut)$/i
handler.premium = false
handler.register = true
export default handler