import axios from 'axios';

async function luminAi(teks, pengguna = null, prompt = null, modePencarianWeb = false) {
    try {
        const data = { content: teks };
        if (pengguna !== null) data.user = pengguna;
        if (prompt !== null) data.prompt = prompt;
        data.webSearchMode = modePencarianWeb;

        const { data: res } = await axios.post("https://lumin-ai.xyz/", data);
        return res.result;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        throw error;
    }
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) {
        await conn.reply(m.chat, `Silakan masukkan teks setelah perintah ${usedPrefix + command}`, m);
        return;
    }

    try {
        const pengguna = m.sender;
        const result = await luminAi(text, pengguna);
        await conn.reply(m.chat, result, m);
    } catch (error) {
        await conn.reply(m.chat, 'Terjadi kesalahan saat menghubungi LuminAI. Silakan coba lagi nanti.', m);
    }
}

handler.help = ["luminai"]; // Ganti dengan perintah bantuan yang sesuai
handler.tags = ["ai"]; // Ganti dengan tag yang sesuai
handler.command = ["luminai"]; // Ganti dengan perintah yang sesuai

export default handler;