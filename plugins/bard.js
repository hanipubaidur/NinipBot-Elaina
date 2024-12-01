import fetch from 'node-fetch';

// Fungsi untuk mengirim permintaan ke API Gemini
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyBHzyhs4C3X_dh9tWjsEcax-D3btyJw3WY';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; // Mengembalikan data respons dari API
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};

// Fungsi handler untuk command gemini2
const handler = async (m, { text }) => {
    const prompt = text.trim();

    if (!prompt) {
        return m.reply("Masukkan prompt untuk digunakan! Contoh: .bard Explain how AI works");
    }

    try {
        const response = await sendToGemini(prompt); 
        if (response) {
            // Mengambil teks dari respons API
            const candidates = response.candidates;
            const message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text // Mengambil bagian teks
                : 'Tidak ada respons yang diterima dari model.';

            // Menampilkan respons yang didapat dari Gemini
            m.reply(`[ GOOGLE GEMINI ]\n\n${message}`);
        } else {
            m.reply('Gagal mendapatkan respons dari Gemini API.');
        }
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
};

// Definisi command
handler.command = ['gemini','bard'];
handler.help = ['gemini <prompt>'];
handler.tags = ['ai'];

export default handler
/*
import axios from 'axios';
import jimp from 'jimp';
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text)
    throw `*• Example :* ${usedPrefix + command} woi`;

const defaultApiKey = 'AIzaSyBHzyhs4C3X_dh9tWjsEcax-D3btyJw3WY';

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
];

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const promptpz = ``;

class Gemini {
  constructor(apiKey = defaultApiKey) {
    this.apiKey = apiKey;
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });
  }

  conversation = async (text) => {
    try {
      const chatSession = await this.model.startChat({
        generationConfig,
        history: [
          {
            role: 'user',
            parts: [
              { text: promptpz },
            ],
          },
          {
            role: 'model',
            parts: [
              { text: 'Oke' },
            ],
          },
        ],
      });
      const result = await chatSession.sendMessage(text);
      return result.response.text();
    } catch (error) {
      console.error('Error dalam fungsi conversation:', error);
      throw error;
    }
  };

  image = async (imageUrl, text) => {
    try {
      const imageBuffer = await this.bufferMedia(imageUrl);
      const resizedBuffer = await this.resizeImage(imageBuffer);
      const body = {
        contents: [
          {
            parts: [
              { text: promptpz + text },
              { inline_data: { mime_type: 'image/jpeg', data: resizedBuffer.toString('base64') } },
            ],
          },
        ],
      };

      const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`, body, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error dalam fungsi image:', error);
      throw error;
    }
  };

  audio = async (audioUrl, text) => {
    try {
      const audioBuffer = await this.bufferMedia(audioUrl);
      const body = {
        contents: [
          {
            parts: [
              { text: promptpz + text },
              { inline_data: { mime_type: 'audio/mpeg', data: audioBuffer.toString('base64') } },
            ],
          },
        ],
      };

      const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`, body, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error dalam fungsi audio:', error);
      throw error;
    }
  };

  async bufferMedia(mediaUrl) {
    const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
    return Buffer.from(response.data);
  }

  async resizeImage(imageBuffer) {
    const image = await jimp.read(imageBuffer);
    const resizedBuffer = await image.resize(512, 512).getBufferAsync(jimp.MIME_JPEG);
    return resizedBuffer;
  }
}

const geminiInstance = new Gemini();
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype;

if (/image/.test(mime)) {
  // Handle image: Process as image/jpeg
  let url = await (isTele ? uploadImage : uploadFile)(await q.download());
  let data = await geminiInstance.image(url, text);
  m.reply(`${data}`);
} else if (/audio/.test(mime)) {
  // Handle audio: Process as audio/mpeg
  let url = await (isTele ? uploadImage : uploadFile)(await q.download());
  let data = await geminiInstance.audio(url, text);
  m.reply(`${data}`);
} else {
  // If neither image nor audio, fall back to conversation
  let data = await geminiInstance.conversation(text);
  m.reply(`${data}`);
}

};

handler.help = ["gemini"].map((a) => a + " *[query]*");
handler.command = ["gemini"];
handler.tags = ["ai"];

export default handler;
*/
/*
import fetch from 'node-fetch';

// Fungsi untuk mengirim permintaan ke API Gemini
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyDvizr_N6hVj99bEVFzJyYfo6tVpj65WBg';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; // Mengembalikan data respons dari API
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};

// Fungsi handler untuk command gemini2
const handler = async (m, { text }) => {
    const prompt = text.trim();

    if (!prompt) {
        return m.reply("Masukkan prompt untuk digunakan! Contoh: .bard Explain how AI works");
    }

    try {
        const response = await sendToGemini(prompt); 
        if (response) {
            // Mengambil teks dari respons API
            const candidates = response.candidates;
            const message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text // Mengambil bagian teks
                : 'Tidak ada respons yang diterima dari model.';
conn.sendMessage(m.chat, {
  text: `${message}`,
      contextInfo: {
      externalAdReply: {
        title: 'GOOGLE GEMINI',
        body: 'G O O G L E',
        thumbnailUrl: 'https://files.catbox.moe/7mynfu.jpg',
        sourceUrl: 'https://gemini.google.com',
        mediaType: 1,
        renderLargerThumbnail: false,
      }
        }
      }, {
        quoted: m
      });
    }
handler.command = /^(bard|gemini)$/i
handler.help = ['bard']
handler.tags = ['ai']
handler.premium = false
handler.register = true
export default handler
*/