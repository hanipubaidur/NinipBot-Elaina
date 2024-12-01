let handler = async (m) => {

let anu =`╔═━───╍━╍╍┄ *ᴀɴᴏɴʏᴍᴏᴜꜱ*
╠➺   .ꜱᴛᴀʀᴛ
╠➺   .ʟᴇᴀᴠᴇ
╠➺   .ɴᴇxᴛ
╠➺   .ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
╚═─━╍╍━╍╾
`
await conn.sendMessage(m.chat, {
  text: `${anu}`,
      contextInfo: {
      externalAdReply: {
        title: 'MENU LIST ELAINA',
        body: 'E L A I N A  M U L T I D E V I C E',
        thumbnailUrl: 'https://telegra.ph/file/94b9d0b5ef233c97e00e1.jpg',
        sourceUrl: saluran,
        mediaType: 1,
        renderLargerThumbnail: true, 
      }
        }
      }, {
        quoted: m
      });
    }
handler.help = ['menuanonymous']
handler.tags = ['info']
handler.command = /^(menuanonymous)$/i

export default handler