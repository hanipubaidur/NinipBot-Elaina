import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Contoh penggunaan: ${usedPrefix + command} Crot Crot`;
let stiker = await sticker(null, `https://ochinpo-helper.hf.space/brat?text=${text}`, 'By', '𝘕𝘪𝘯𝘪𝘱𝘉𝘰𝘵 × 𝘌𝘭𝘢𝘪𝘯𝘢-𝘔𝘋')
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)  
} 

handler.help = ['brat']
handler.tags = ['image']
handler.command = /^(brat)$/i
export default handler