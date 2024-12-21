let handler = async (m, { conn, text, participants, isAdmin, isOwner}) => {
    let teks = `◇───── Tag All ─────◇
乂 *Pesan : ${text ? text : 'kosong'}*\n\n`
				for (let mem of participants) {
					teks += `• @${mem.id.split('@')[0]}\n`
				}
				conn.sendMessage(m.chat, {
					text: teks,
					mentions: participants.map(a => a.id)
				}, {
					quoted: m
				})
  }

handler.help = ['o-tagall']
handler.tags = ['owner']
handler.command = ['o-tagall']
handler.owner = true
handler.group = true

export default handler
