import fetch from 'node-fetch'
import yts from 'yt-search';

 let handler = async (m, { conn, text, usedPrefix, command }) => {
   if (!text) throw `*Example:* ${usedPrefix}${command} Amv Anime`;
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let results = await yts(text);
    let tes = results.all[0]
    let {
      title,
      thumbnail,
      timestamp,
      views,
      ago,
      url
    } = tes;
    let teks = "\n*" + title + "*" + "\n\n*Durasi:* " + timestamp + "\n*Views:* " + views + "\n*Upload:* " + ago + "\n*Link:* " + url + "\n";
 let ouh = await fetch(`https://api.ssateam.my.id/api/aio?query=${url}`)
  let gyh = await ouh.json() 
	let urls = `${gyh.data.response.url}`
	conn.sendFile(m.chat, urls, null, `${teks}`, m)
}
handler.help = ['playvideo']
handler.tags = ['downloader']
handler.command = /^(playvideo)$/i
handler.premium = false
export default handler