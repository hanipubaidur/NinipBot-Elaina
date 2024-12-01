import uploadFile from '../lib/uploadFile.js'
import fs from 'fs'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let idch = global.idch // ISI SAMA ID CHANNEL KALIAN
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  conn.sendFile(`${idch}`,`${link}`, null, '', m)
  await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
  m.reply('DONE\n*NOTE: Apabila media tidak terkirim mungkin kamu blom jadi admin atau id channel salah/blom diisi*')
}
handler.help = ['upch']
handler.tags = ['tools']
handler.command = /^(upch)$/i
handler.owner = true
export default handler
