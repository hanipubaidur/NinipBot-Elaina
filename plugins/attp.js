import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
	if (!text[0]) return m.reply(`Teksnya Mana Kak?\nContoh: .attp undergood`)
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, global.API('https://api.erdwpe.com/api/maker/', 'attp?text', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.limit = true
export default handler 