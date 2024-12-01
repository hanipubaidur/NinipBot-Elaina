import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?,\nContoh : https://pin.it/4APtTOREC\nNOTE :\nFITUR PINDL INI HANYA UNTUK PINTEREST VIDEO!!!!`
conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let kontol = await pinterestDl(text)
	let url = `${kontol.videoUrl}`
	await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
	conn.sendFile(m.chat, url, null, `Link pinterest : ${text}\nLink URL Video : ${kontol.videoUrl}`, m)
}
handler.help = ['pindl']
handler.tags = ['downloader']
handler.command = /^(pindl)$/i
export default handler

async function pinterestDl(url) {
  try {
    const baseUrl = 'https://www.savepin.app/';
    const sayJawa = {
      method: 'POST',
      url: baseUrl + 'download.php?url=' + encodeURIComponent(url),
      headers: {
        'Content-Type': 'application/json'
      },
      data: {}
    };

    const response = await axios.request(sayJawa);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);
      
      const thumbnailUrl = $("a.button[href*='force-save.php?url=']").filter((i, el) => {
        return $(el).attr('href').includes('.jpg');
      }).attr('href');
      
      const videoUrl = $("a.button[href*='force-save.php?url=']").filter((i, el) => {
        return $(el).attr('href').includes('.mp4');
      }).attr('href');


      const result = {
        status: 'success',
        author: "@Ninip",
        thumbnailUrl: thumbnailUrl ? baseUrl + thumbnailUrl : null,
        videoUrl: videoUrl ? baseUrl + videoUrl : null
      };

      return result;
    } else {
      return {
        status: 'error',
        author: "@Ninip",
        message: 'Failed to retrieve content, server responded with status code ' + response.status
      };
    }
  } catch (error) {
    console.error('Error fetching media URLs: ', error.message);
    return {
      status: 'error',
      author: "@Ninip",
      message: 'Error fetching media URLs: ' + error.message
    };
  }
}