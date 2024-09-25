import fetch from 'node-fetch';
import gtts from 'node-gtts';
import { readFileSync, unlinkSync } from 'fs';
import { join } from 'path';

const defaultLang = 'id';
const openaiApiUrl = 'https://widipe.com/gpt4?text=';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let lang = args[0];
  let text = args.slice(1).join(' ');

  // Jika panjang args[0] bukan 2 (tidak sesuai kode aslinya)
  if ((args[0] || '').length !== 2) {
    lang = defaultLang;
    text = args.join(' ');
  }

  // Jika tidak ada teks langsung dan jika ada pesan yang dibalas
  if (!text && m.quoted?.text) text = m.quoted.text;

  try {
    // Mengirim permintaan ke API OpenAI untuk mendapatkan audio
    const openaiResponse = await fetch(`${openaiApiUrl}${encodeURIComponent(text)}`);
    const openaiData = await openaiResponse.json();

    // Periksa apakah respons sukses sebelum mengonversi teks menjadi suara
    if (openaiData.status && openaiData.result) {
      const audioText = openaiData.result;

      // Mengonversi teks menjadi file audio
      const audioFile = await tts(audioText, lang);

      // Mengirim file audio ke pengguna
      conn.sendFile(m.chat, audioFile, 'tts.mp3', null, m, true);
    } else {
      m.reply('Gagal mendapatkan teks dari API OpenAI.');
    }
  } catch (e) {
    m.reply('Terjadi kesalahan saat memproses permintaan.');
    console.error(e);
  }
};

handler.help = ['gptvoice <lang> <teks>'];
handler.tags = ['tools'];
handler.command = /^(gptvoice|aivoice)$/i
handler.limit = true;

export default handler;

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang);
      let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav');
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath));
        unlinkSync(filePath);
      });
    } catch (e) {
      reject(e);
    }
  });
}
