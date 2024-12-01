import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let ahh = await fetch(`https://btch.us.kg/bardimg?url=${link}&text=${text}`)
  let yaya = await ahh.json()
  let yayaya = `${yaya.result}`
  await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  m.reply(yayaya)
}
handler.help = ['bard-img']
handler.tags = ['ai']
handler.command = /^(bard-img|bardimg)$/i
handler.limit = true
export default handler