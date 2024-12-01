import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn }) => { 
let stiker = await sticker(null, global.API(`https://telegra.ph/file/8ac46a72f7e06beb88332.jpg`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.command = /^(ninip|nip|@6282183478561|@6287775524661)$/i

export default handler 