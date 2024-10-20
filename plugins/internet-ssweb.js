import fetch from 'node-fetch';
let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) {
        if (m.quoted && m.quoted.text) {
            text = m.quoted.text;
        } else {
            return m.reply(`• *Example :* ${usedPrefix + command} *[url]*`);
        }
    }

    let urlMatch = text.match(/https?:\/\/[^\s]+/);
    if (!urlMatch) {
        return m.reply(`• *Example :* ${usedPrefix + command} *[url]*`);
    }

    let url = urlMatch[0];

    try {
        let res = await fetch(`https://apikita.exonity.xyz/api/ssweb?url=${url}`);
        let hasil = await res.json();

        await conn.sendFile(m.chat, hasil.result, '', '', m);
    } catch (error) {
        m.reply('Error fetching screenshot.');
    }
};

handler.help = ["ss", "ssweb"].map((a) => a + " *[url]*");
handler.tags = ["tools"];
handler.command = ["ss", "ssweb"];

export default handler;