let handler = async (m, { conn, usedPrefix, command, text }) => {
    // Mengecek apakah `text` kosong
    if (!m.quoted) {
        return m.reply(`[❗] Reply audio dengan command /${usedPrefix + command} <text>`);
    }
    try {
        m.react('⏱️');
        m.react('✅');
        let tujuan = text;
        
conn.sendMessage(`${global.idch}`, {audio: await m.quoted.download(), mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "17066043972@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${text}`,
newsletterJid: `${global.idch}`}
}},{quoted: m})
        m.reply(`D o n e ✔️\nAudio Berhasil Dikirm Ke Channel`);
    } catch (err) {
        m.reply('Error: ' + err.message);
        m.react('❌');
    }
};

handler.help = ['upaudioch'];
handler.command = /^(upaudioch|tovnsaluran)$/i;
handler.tags = ['tools'];
handler.owner = true

export default handler;
