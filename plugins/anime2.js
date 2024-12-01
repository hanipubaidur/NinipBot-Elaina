import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, usedPrefix, command }) => {
    let res = await googleImage(`image ${command} anime`)
    let image = res.getRandom()
    await conn.sendFile(m.chat, image, null, `Nih image ${command} nya`, m, null)
}
handler.help = ['ayano','bocchi','chisato','ikuyo','kaguya','loli','rlas','takina','yotsuba','yumeko','loli','elaina']
handler.tags = ['anime']
handler.command = /^(ayano|bocchi|chisato|ikuyo|kaguya|rlas|takina|yotsuba|yumeko|frieren|elaina|loli|rimuru)$/i
handler.limit = true

export default handler