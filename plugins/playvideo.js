import axios from 'axios';
import yts from 'yt-search';
import { ytdl } from '../lib/yetehdeel.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
    conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let data = (await yts(text)).all
    let hasil = data[~~(Math.random() * data.length)]
        let download = await ytdl(`${hasil.url}`);
        let {
      title,
      thumbnail,
      timestamp,
      views,
      ago,
      url
    } = hasil;
    let teks = "\n*" + title + "*" + "\n\n*Durasi:* " + timestamp + "\n*Views:* " + views + "\n*Upload:* " + ago + "\n*Link:* " + url + "\n";
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
        await conn.sendMessage(m.chat, {
            video: {
                url: download.data.mp4,
            },
            caption: teks,
        }, {
            quoted: m,
        });

    } catch (e) {
        throw `❌ Error: ${e.message || e}`;
    }
};

handler.help = ["playvideo"];
handler.tags = ["downloader"];
handler.command = /^(playvideo)$/i;
handler.exp = 0;
handler.register = true;
handler.limit = true;

export default handler;

/*
import fetch from 'node-fetch'
import yts from 'yt-search';
import { ytdl } from '../lib/yetehdeel.js'


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
 let ouh = await ytdl(`${url}`)
	let urls = `${ouh.data.mp4}`
	conn.sendFile(m.chat, urls, null, `${teks}`, m)
}
handler.help = ['playvideo']
handler.tags = ['downloader']
handler.command = /^(playvideo)$/i
handler.premium = false
export default handler
*/