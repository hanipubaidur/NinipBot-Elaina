import yts from 'yt-search';
import { ytdl } from '../lib/yetehdeel.js'

const handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw 'Masukkan Judul / Link Dari YouTube!';
  try {
    let data = (await yts(text)).all
    let hasil = data[~~(Math.random() * data.length)]
    if (!hasil) throw 'Video/Audio Tidak Ditemukan';
    if (hasil.seconds >= 3600) {
      return conn.reply(m.chat, 'Video lebih dari 1 jam!', m);
    } else {
      let audioUrl;
      try {
        audioUrl = await ytdl(hasil.url);
      } catch (e) {
        conn.reply(m.chat, 'Tunggu sebentar...', m);
        audioUrl = await ytdl(hasil.url);
      }

      let caption = '';
      caption += `∘ Judul : ${hasil.title}\n`;
      caption += `∘ Ext : Search\n`;
      caption += `∘ ID : ${hasil.videoId}\n`;
      caption += `∘ Durasi : ${hasil.timestamp}\n`;
      caption += `∘ Penonton : ${hasil.views}\n`;
      caption += `∘ Diunggah : ${hasil.ago}\n`;
      caption += `∘ Penulis : ${hasil.author.name}\n`;
      caption += `∘ Channel : ${hasil.author.url}\n`;
      caption += `∘ Url : ${hasil.url}\n`;
      caption += `∘ Deskripsi : ${hasil.description}\n`;
      caption += `∘ Thumbnail : ${hasil.image}`;

      await conn.relayMessage(m.chat, {
        extendedTextMessage: {
          text: caption,
          contextInfo: {
            externalAdReply: {
              title: hasil.title,
              mediaType: 1,
              previewType: 0,
              renderLargerThumbnail: true,
              thumbnailUrl: hasil.image,
              sourceUrl: audioUrl.data.mp3
            }
          },
          mentions: [m.sender]
        }
      }, {});

      await conn.sendMessage(m.chat, {
        audio: {
          url: audioUrl.data.mp3
        },
        mimetype: 'audio/mpeg',
        contextInfo: {
          externalAdReply: {
            title: hasil.title,
            body: "",
            thumbnailUrl: hasil.image,
            sourceUrl: audioUrl.data.mp3,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
          }
        }
      }, {
        quoted: m
      });
    }
  } catch (e) {
    conn.reply(m.chat, `*Error:* ` + e.message, m);
  }
};

handler.command = handler.help = ['play', 'song'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;

export default handler;
/*
import search from 'yt-search';
import { ytdl } from '../lib/yetehdeel.js'

const handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw 'Masukkan Judul / Link Dari YouTube!';
  try {
    const look = await search(text);
    const convert = look.videos[0];
    if (!convert) throw 'Video/Audio Tidak Ditemukan';
    if (convert.seconds >= 3600) {
      return conn.reply(m.chat, 'Video lebih dari 1 jam!', m);
    } else {
      let audioUrl;
      try {
        audioUrl = await ytdl(convert.url);
      } catch (e) {
        conn.reply(m.chat, 'Tunggu sebentar...', m);
        audioUrl = await ytdl(convert.url);
      }

      let caption = '';
      caption += `∘ Judul : ${convert.title}\n`;
      caption += `∘ Ext : Search\n`;
      caption += `∘ ID : ${convert.videoId}\n`;
      caption += `∘ Durasi : ${convert.timestamp}\n`;
      caption += `∘ Penonton : ${convert.views}\n`;
      caption += `∘ Diunggah : ${convert.ago}\n`;
      caption += `∘ Penulis : ${convert.author.name}\n`;
      caption += `∘ Channel : ${convert.author.url}\n`;
      caption += `∘ Url : ${convert.url}\n`;
      caption += `∘ Deskripsi : ${convert.description}\n`;
      caption += `∘ Thumbnail : ${convert.image}`;

      await conn.relayMessage(m.chat, {
        extendedTextMessage: {
          text: caption,
          contextInfo: {
            externalAdReply: {
              title: convert.title,
              mediaType: 1,
              previewType: 0,
              renderLargerThumbnail: true,
              thumbnailUrl: convert.image,
              sourceUrl: audioUrl.data.mp3
            }
          },
          mentions: [m.sender]
        }
      }, {});

      await conn.sendMessage(m.chat, {
        audio: {
          url: audioUrl.data.mp3
        },
        mimetype: 'audio/mpeg',
        contextInfo: {
          externalAdReply: {
            title: convert.title,
            body: "",
            thumbnailUrl: convert.image,
            sourceUrl: audioUrl.data.mp3,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
          }
        }
      }, {
        quoted: m
      });
    }
  } catch (e) {
    conn.reply(m.chat, `*Error:* ` + e.message, m);
  }
};

handler.command = handler.help = ['play', 'song'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;

export default handler;
*/