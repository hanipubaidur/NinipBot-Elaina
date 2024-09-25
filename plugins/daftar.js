import fetch from 'node-fetch'
const {
    proto,
    generateWAMessageFromContent,
    prepareWAMessageMedia
  } = (await import('@adiwajshing/baileys')).default
import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Rapikz`
    try {
const data = {
    title: "KLIK TOMBOL INI",
    sections: [{
            title: `PILIH UMUR`,
            rows: [{
                    title: "10",
                    description: "Tahun",
                    id: `.register ${text}.10`
                },
                {
                    title: "11",
                    description: "Tahun",
                    id: `.register ${text}.11`
                },
                {
                    title: "12",
                    description: "Tahun",
                    id: `.register ${text}.12`
                },
                {
                    title: "13",
                    description: "Tahun",
                    id: `.register ${text}.13`
                },
                {
                    title: "14",
                    description: "Tahun",
                    id: `.register ${text}.14`
                },
                {
                    title: "15",
                    description: "Tahun",
                    id: `.register ${text}.15`
                },
                {
                    title: "16",
                    description: "Tahun",
                    id: `.register ${text}.16`
                },
                {
                    title: "17",
                    description: "Tahun",
                    id: `.register ${text}.17`
                },
                {
                    title: "18",
                    description: "Tahun",
                    id: `.register ${text}.18`
                },
                {
                    title: "19",
                    description: "Tahun",
                    id: `.register ${text}.19`
                },
                {
                    title: "20",
                    description: "Tahun",
                    id: `.register ${text}.20`
                },
                {
                    title: "21",
                    description: "Tahun",
                    id: `.register ${text}.21`
                },
                {
                    title: "22",
                    description: "Tahun",
                    id: `.register ${text}.22`
                },
                {
                    title: "23",
                    description: "Tahun",
                    id: `.register ${text}.23`
                },
                {
                    title: "24",
                    description: "Tahun",
                    id: `.register ${text}.24`
                },
                {
                    title: "25",
                    description: "Tahun",
                    id: `.register ${text}.25`
                },
                {
                    title: "26",
                    description: "Tahun",
                    id: `.register ${text}.26`
                },
                {
                    title: "27",
                    description: "Tahun",
                    id: `.register ${text}.27`
                },
                {
                    title: "28",
                    description: "Tahun",
                    id: `.register ${text}.28`
                },
                {
                    title: "29",
                    description: "Tahun",
                    id: `.register ${text}.29`
                },
                {
                    title: "30",
                    description: "Tahun",
                    id: `.register ${text}.30`
                },
                {
                    title: "31",
                    description: "Tahun",
                    id: `.register ${text}.31`
                },
                {
                    title: "32",
                    description: "Tahun",
                    id: `.register ${text}.32`
                },
                {
                    title: "33",
                    description: "Tahun",
                    id: `.register ${text}.33`
                },
                {
                    title: "34",
                    description: "Tahun",
                    id: `.register ${text}.34`
                },
                {
                    title: "35",
                    description: "Tahun",
                    id: `.register ${text}.35`
                },
                {
                    title: "36",
                    description: "Tahun",
                    id: `.register ${text}.36`
                },
                {
                    title: "37",
                    description: "Tahun",
                    id: `.register ${text}.37`
                },
                {
                    title: "38",
                    description: "Tahun",
                    id: `.register ${text}.38`
                },
                {
                    title: "39",
                    description: "Tahun",
                    id: `.register ${text}.39`
                },
                {
                    title: "40",
                    description: "Tahun",
                    id: `.register ${text}.40`
                },
                {
                    title: "41",
                    description: "Tahun",
                    id: `.register ${text}.41`
                },
                {
                    title: "42",
                    description: "Tahun",
                    id: `.register ${text}.42`
                },
                {
                    title: "43",
                    description: "Tahun",
                    id: `.register ${text}.43`
                },
                {
                    title: "44",
                    description: "Tahun",
                    id: `.register ${text}.44`
                },
                {
                    title: "45",
                    description: "Tahun",
                    id: `.register ${text}.45`
                },
                {
                    title: "46",
                    description: "Tahun",
                    id: `.register ${text}.46`
                },
                {
                    title: "47",
                    description: "Tahun",
                    id: `.register ${text}.47`
                },
                {
                    title: "48",
                    description: "Tahun",
                    id: `.register ${text}.48`
                },
                {
                    title: "49",
                    description: "Tahun",
                    id: `.register ${text}.49`
                },
                {
                    title: "50",
                    description: "Tahun",
                    id: `.register ${text}.50`
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
            text: `Oke namamu adalah *${text}*\nSekarang silahkan Pilih Umur anda dengan cara klik tombol dibawah`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: "https://i.pinimg.com/originals/a4/35/81/a43581c3034771dba7e18151d15ce79e.jpg" } }, { upload: conn.waUploadToServer })
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
handler.help = ['daftar']
handler.tags = ['main']
handler.command = /^(daftar)$/i
handler.limit = false

export default handler