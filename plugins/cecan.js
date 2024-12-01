let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/cecan?apikey=zenzkey_f07b21f698', 'cecan.mp4', 'Nih kak', m)
}
handler.help = ['cecan']
handler.tags = ['internet']

handler.command = /^(cecan)$/i
export default handler 