import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { conn }) => { 

         let caption = `*Ninip BOT v13.0.0 | BOT ON*`;
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: wm,
          thumbnailUrl: 'https://telegra.ph/file/6890ee54916c4de72bf0e.jpg',
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true, 
          showAdAttribution: true
        }
      }
    });
 }
 handler.help = ['gcbot', 'gcelaina'];
handler.tags = ['main'];
handler.command = /^(gcbot|groupbot|botgc|botgroup)$/i;
export default handler;