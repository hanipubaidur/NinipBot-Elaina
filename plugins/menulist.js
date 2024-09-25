import fetch from 'node-fetch'
const {
    proto,
    generateWAMessageFromContent,
    prepareWAMessageMedia
  } = (await import('@adiwajshing/baileys')).default
import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, usedPrefix, command }) => {
    if (!command) throw `menu`
    try {
const data = {
    title: "KLIK TOMBOL INI",
    sections: [{
            title: `List Menu`,
            rows: [{
                    title: "ALL MENU",
                    description: "Menampilkan Semua Menu",
                    id: `.allmenu`
                },
                {
                    title: "MENU AI",
                    description: "Menampilkan menu Artificial Intelligence",
                    id: `.menuai`
                },
                {
                    title: "MENU ANIME",
                    description: "Menampilkan menu Anime",
                    id: `.menuanime`
                },
                {
                    title: "MENU ANONYMOUS",
                    description: "Menampilkan menu anonymous",
                    id: `.menuanonymous`
                },
                {
                    title: "MENU AUDIO",
                    description: "Menampilkan menu audio",
                    id: `.menuaudio`
                },
                {
                    title: "MENU DOWNLOAD",
                    description: "Menampilkan menu download",
                    id: `.menudownload`
                },
                {
                    title: "MENU GAME",
                    description: "Menampilkan menu game",
                    id: `.menugame`
                },
                {
                    title: "MENU GROUP",
                    description: "Menampilkan menu khusus group",
                    id: `.menugroup`
                },
                {
                    title: "MENU FUN",
                    description: "Menampilkan menu fun/utk kesenangan",
                    id: `.menufun`
                },
                {
                    title: "MENU INFO",
                    description: "Menampilkan menu info",
                    id: `.menuinfo`
                },
                {
                    title: "MENU INTERNET",
                    description: "Menampilkan menu internet",
                    id: `.menuinternet`
                },
                {
                    title: "MENU ISLAMI",
                    description: "Menampilkan menu Islam (untuk yang agama Islam)",
                    id: `.menuislami`
                },
                {
                    title: "MENU USER",
                    description: "Menampilkan menu untuk user",
                    id: `.menuuser`
                },
                {
                    title: "MENU NSFW",
                    description: "Menampilkan menu NSFW/18+",
                    id: `.menunsfw`
                },
                {
                    title: "MENU OWNER",
                    description: "Menampilkan menu owner/pemilik",
                    id: `.menuowner`
                },
                {
                    title: "MENU STICKER",
                    description: "Menampilkan menu sticker",
                    id: `.menusticker`
                },
                {
                    title: "MENU TOOLS",
                    description: "Menampilkan menu tools",
                    id: `.menutool`
                },
                {
                    title: "MENU XP",
                    description: "Menampilkan menu XP",
                    id: `.menuxp`
                },
                {
                    title: "MENU RPG",
                    description: "Menampilkan menu RPG",
                    id: `.menurpg`
                },
            ]
        }
    ]
}
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "MENULIST ELAINA"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: "https://i.pinimg.com/originals/3e/be/1c/3ebe1c563ba48439d9bf5c0525058124.jpg" } }, { upload: conn.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(data)
              }],
          })
       })
    }
  }
}, { quoted: m })

return await conn.relayMessage(m.chat, msgs.message, {})
} catch (e) {
conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}}
handler.help = ['menulist']
handler.tags = ['menu']
handler.command = /^(menulist)$/i
handler.limit = false
handler.register = true

export default handler