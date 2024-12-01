let handler = async (m, { conn, usedPrefix, command, text }) => {
    // Mengecek apakah `text` kosong
    if (!m.quoted) {
        return m.reply(`[❗] Reply audio dengan command /${usedPrefix + command} IDCH|JUDUL MUSIK`);
    }
    try {
        m.react('⏱️');
        m.react('✅');
        let [idch, judul] = text.split('|')
        if (!idch) throw '*[ ⚠️ ] HARAP MASUKKAN ID CHNYA YA\nCONTOH CARA PENGGUNAAN:\n`tovnsaluran 120363318498252170@newsletter|JJ Kane'
        //powered by kyzryzz
conn.sendMessage(`${idch}`, {audio: await m.quoted.download(), mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "17066043972@s.whatsapp.net" 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${judul}`,
newsletterJid: `${idch}`}
}},{quoted: m})
        m.reply(`D o n e ✔️\n> Audio Berhasil Dikirm Ke \`\`\`${idch}\`\`\``);
    } catch (err) {
        m.reply('Error: ' + err.message);
        m.react('❌');
    }
};

handler.help = ['tovnsaluran-id'];
handler.command = /^(tovnsaluran-id)$/i;
handler.tags = ['tools'];

export default handler;