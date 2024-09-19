export default {
    before: async (m, { conn }) => {
      if (!m.isGroup) return;
      if (m.sender === "6282269200291@s.whatsapp.net") { // Ganti 0 Ke Nomer Target Blacklist, contoh : 6281234567890@s.whatsapp.net
        await conn.sendMessage(m.chat, { delete: { ...m.key }});
      }
    }
  }