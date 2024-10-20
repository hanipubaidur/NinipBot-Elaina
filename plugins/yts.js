import yts from "yt-search"
const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default;

import { format } from 'util';

let handler = async (m, {
    conn,
    text
}) => {
let anu = (await yts(text)).all
let video = anu.filter(v => v.type === 'video') 
let channel = anu.filter(v => v.type === 'channel') 
let teks = `${channel.map(v => `*${v.name}* (${v.url})\n_${v.subCountLabel} (${v.subCount}) Subscriber_\n${v.videoCount} video\n────────────────`.trim()

).join("\n")}`+`${video.map(v =>  `*${v.title}* (${v.url})\nDuration: ${v.timestamp}\nUploaded ${v.ago}
\n${v.views} views\n─────────────────`.trim() ).join("\n")}`
let image = 'https://telegra.ph/file/c7d54daa8644eeaa1bb2f.jpg';

let sections = [{
		title: 'Youtube Search', 
		highlight_label: 'start chats', 
		rows: [{
			header: '', 
	title: "Menu Awal",
	description: `Display Kembali Ke Menu Utama`, 
	id: '.menu'
	},
	{
		header: '', 
		title: "Owner Bot", 
		description: "Owner bot, pemilik Elaina", 
		id: '.owner'
	}]
}]

video.forEach(async(data) => {
sections.push({
	title: data.title, 
	rows: [{
		title: "Get Video", 
		description: `Get video from "${data.title}"`, 
		id: `.ytmp4 ${data.url}`
		}, 
		{
		title: "Get Audio", 
		description: `Get audio from "${data.title}"`, 
		id: `.ytmp3 ${data.url}`
		}]
	}) 
}) 
let listMessage = {
    title: 'Click here!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'YouTube Searching',
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: null,
            hasMediaAttachment: true,
            ...(
              await prepareWAMessageMedia({
                image: { url: image},
              }, { upload: conn.waUploadToServer })
            )
          }),
          contextInfo: {
            forwardingScore: 2024,
            isForwarded: true,
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
              newsletterJid: idch,
              serverMessageId: null,
              newsletterName: `NinipBot Information ID`,
            },
            gifPlayback: true,
            externalAdReply: {
              showAdAttribution: true,
              title: 'Youtube Search',
              body: wm,
              mediaType: 1,
              sourceUrl: sgc,
              thumbnailUrl: thumb,
              renderLargerThumbnail: true
            }
          },
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage) 
              }, 
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}

handler.help = ["yts", "search"].map(v => "yts" + v + " <pencarian>")
handler.tags = ["tools"]
handler.command = /^(ytsearch|yts)$/i
export default handler