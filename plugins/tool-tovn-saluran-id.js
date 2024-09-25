let handler = async (m, { conn, usedPrefix, command, text }) => {
    // Mengecek apakah `text` kosong
    if (!m.quoted) {
        return m.reply(`[❗] Reply audio dengan command /${usedPrefix + command} <id>`);
    }
    try {
        m.react('⏱️');
        m.react('✅');
        let tujuan = text;

conn.sendMessage(`${text}`, {audio: await m.quoted.download(), mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "17066043972@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Music`,
newsletterJid: `${text}`}
}},{quoted: m})
        m.reply(`D o n e ✔️\n> Audio Berhasil Dikirm Ke \`\`\`${tujuan}\`\`\``);
    } catch (err) {
        m.reply('Error: ' + err.message);
        m.react('❌');
    }
};

handler.help = ['tovnsaluran-id'];
handler.command = /^(tovnsaluran-id|tovnsaluran)$/i;
handler.tags = ['tools'];

export default handler;