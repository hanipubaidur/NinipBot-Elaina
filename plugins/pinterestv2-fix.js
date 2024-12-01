import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Elaina Chibi`
    try {
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'pinterestv2.jpg', `*Result:* ${text}
*Source:* Pinterestv2
`,m)
} catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['pinterestv2<query>']
handler.tags = ['internet']
handler.command = /^(pinterestv2)$/i
handler.limit = true
export default handler
