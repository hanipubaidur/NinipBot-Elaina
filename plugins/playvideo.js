import fetch from 'node-fetch'
import yts from 'yt-search';

 let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    if (!text) throw `*Example:* ${usedPrefix}${command} Amv Anime`
    let data = (await yts(text)).all
    let hasil = data[~~(Math.random() * data.length)]
 let ouh = await fetch(`https://rest.cifumo.biz.id/api/downloader/ytdl?url=${hasil.url}`)
  let gyh = await ouh.json() 
	let urls = `${gyh.data.video}`
	conn.sendFile(m.chat, urls, null, `${hasil.url}`, m)
}
handler.help = ['playvideo']
handler.tags = ['downloader']
handler.command = /^(playvideo)$/i
handler.premium = false
export default handler