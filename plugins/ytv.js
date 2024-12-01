import { ytdl } from '../lib/yetehdeel.js'
let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) return m.reply("[❗] Linknya?");
    conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
 
        const response = await ytdl(text);
        const videoUrl = response.data.mp4;
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
            conn.sendMessage(m.chat, {
                video: {
                    url:videoUrl
                }, 
                caption: `Nih videonya kak`
            }, {
                quoted: m
            })
};

handler.help = ["ytmp4"];
handler.tags = ["downloader"];
handler.command = ["ytmp4", "ytv", "ytvideo"];

export default handler;
/*
import { ddownr } from '../lib/ddownr.js'
let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) return m.reply("[❗] Linknya?");
    m.reply(wait);
        const format = '720'
        const response = await ddownrl(text, format);
        const videoUrl = response.downloadUrl;
        
            conn.sendMessage(m.chat, {
                video: {
                    url:videoUrl
                }, 
                caption: `Nih videonya kak`
            }, {
                quoted: m
            })
};

handler.help = ["ytmp42"];
handler.tags = ["downloader"];
handler.command = ["ytmp42", "ytv2", "ytvideo2"];

export default handler;
*/
/*
import axios from 'axios';
import yts from 'yt-search';
import { ytdl } from '../lib/yetehdeel.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
    conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let anu = `#jjanime`
    let data = (await yts(anu)).all
    let hasil = data[~~(Math.random() * data.length)]
        let download = await ytdl(`${hasil.url}`);
        let caption = `${download.title}`;
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
        await conn.sendMessage(m.chat, {
            video: {
                url: download.data.mp4,
            },
            caption: caption,
        }, {
            quoted: m,
        });

    } catch (e) {
        throw `❌ Error: ${e.message || e}`;
    }
};

handler.help = ["jjanime"];
handler.tags = ["downloader"];
handler.command = /^(jjanime)$/i;
handler.exp = 0;
handler.register = true;
handler.limit = true;

export default handler;
*/