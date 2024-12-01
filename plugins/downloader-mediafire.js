import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply('Please provide a MediaFire link!');

    try {
        const response = await fetch(`https://api.agatz.xyz/api/mediafire?url=${text}`);
        const result = await response.json();

        if (result.status === 200) {
            const file = result.data[0];
            const mime = file.mime;

            let caption = `*File Name:* ${file.nama}\n*Size:* ${file.size}\n\nDownloading...`;

            await conn.sendMessage(m.chat, { text: caption }, m);
            await conn.sendMessage(m.chat, { document: { url: file.link }, mimetype: mime, fileName: file.nama }, m);
        } else {
            m.reply('Failed to fetch the MediaFire link. Please try again.');
        }
    } catch (error) {
        console.error(error);
        m.reply('An error occurred while fetching the download link.');
    }
};

handler.help = ['mediafire'];
handler.tags = ['download'];
handler.command = /^(mf|mediafire|md)$/i;

export default handler;

/*
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `MASUKAN LINK!!!\n*Contoh:* ${usedPrefix}${command} https://www.mediafire.com/file/2v2x1p0x58qomva/WhatsApp_Messenger_2.24.21.8_beta_By_WhatsApp_LLC.apk/file`;
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
	let ouh = await fetch(`https://btch.us.kg/mediafire?link=${text}`)
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
*/

/*
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

export default handler
*/
