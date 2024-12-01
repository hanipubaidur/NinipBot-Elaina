import fetch from 'node-fetch'

export async function before(m, { conn, args, text, usedPrefix, command }) {
  let d = new Date(new Date + 3600000)
  let locale = 'id'
  let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
  let link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
  let data = db.data.settings[conn.user.jid]
  let chat = db.data.chats[m.chat]
  
  if (m.fromMe) return
  if (!m.isGroup) return
  if (data.update_gempa) {
  
  let res = await fetch(link + 'autogempa.json')
  let res2 = await res.json()
  let anu = res2.Infogempa.gempa
  let txt = `*${anu.Wilayah}*\n\n`
  txt += `Tanggal : ${anu.Tanggal}\n`
  txt += `Waktu : ${anu.Jam}\n`
  txt += `Potensi : *${anu.Potensi}*\n\n`
  txt += `Magnitude : ${anu.Magnitude}\n`
  txt += `Kedalaman : ${anu.Kedalaman}\n`
  txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
  
  if (new Date - chat.lastgempa < 86400000) {
  } else {
  if (anu.Tanggal === date) {
  
  conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      "externalAdReply": {
        "title": 'UPDATE GEMPA',
        "body": date,
        "showAdAttribution": true,
        "mediaType": 1,
        "sourceUrl": sgc,
        "thumbnail": await (await conn.getFile(link + anu.Shakemap)).data,
        "renderLargerThumbnail": true
      }
    }
  })
  
  chat.lastgempa = new Date() * 1
  } else console.log('nothing')
  }}
}