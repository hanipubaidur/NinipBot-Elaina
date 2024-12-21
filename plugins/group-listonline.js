let handler = async (m, { conn }) => {
  const c = await conn.groupMetadata(m.chat);
  const online = c.participants
    .filter(p => p.id in conn.chats && conn.chats[p.id].presences)
    .sort((a, b) => a.id.localeCompare(b.id, "id", { sensitivity: "base" }))
    .map((p, i) => `*${i + 1}.* @${p.id.split("@")[0]}`)
    .join("\n");

  let text = `*👤 LIST ONLINE*\n<==================>\n`;
  text += online;

  conn.sendMessage(m.chat, {
      text: text,
      mentions: c.participants.map(p => p.id)
  }, {
      quoted: m
  });
};

handler.help = ["listonline"].map((a) => a + " *[get list online member]*");
handler.tags = ["group"];
handler.command = ["listonline"];
handler.group = true;
handler.admin = true;

export default handler;