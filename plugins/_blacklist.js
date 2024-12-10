let handler = m => m

// Daftar nomor yang diblacklist
const blacklist = [
    "62895403951894@s.whatsapp.net", // Nomor pertama
    "62895402269884@s.whatsapp.net"   // Nomor kedua (ganti dengan nomor yang diinginkan)
];

handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
    if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true; // Memastikan bahwa pesan bukan dari bot dan berasal dari grup

    // Memeriksa apakah pengirim ada dalam daftar blacklist
    if (blacklist.includes(m.sender)) {
        await m.reply('*≡ Pengirim ada di blacklist!*\nKami tidak mengizinkan pengirim ini di grup ini.');
        
        if (!isBotAdmin) return m.reply('*Bot Belum Admin_-*'); // Memastikan bot adalah admin

        await conn.sendMessage(m.chat, { delete: m.key }); // Menghapus pesan pengirim
        await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove"); // Mengeluarkan pengirim dari grup
    }
    return true;
}

export default handler;