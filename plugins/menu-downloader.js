let handler = async (m) => {

let anu =`╔═━───╍━╍╍┄ *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
╠➺   .ᴀꜱᴜᴘᴀɴ (ⓛ)
╠➺   .ᴀɪᴏ  (ⓟ)
╠➺   .ᴀʟʟsᴏsᴍᴇᴅ <ᴜʀʟ>
╠➺   .ᴄᴀᴘᴄᴜᴛ
╠➺   .ꜰᴀᴄᴇʙᴏᴏᴋ *[ʟɪɴᴋ]*
╠➺   .ɢᴅʀɪᴠᴇ <ᴜʀʟ>
╠➺   .ɢɪᴛᴄʟᴏɴᴇ <ᴜʀʟ> (ⓛ)
╠➺   .ɪɴꜱᴛᴀɢʀᴀᴍ
╠➺   .ɪɢᴘʜᴏᴛᴏ <ᴜʀʟ>
╠➺   .ᴍᴇᴅɪᴀꜰɪʀᴇ <ᴜʀʟ>
╠➺   .ᴘɪɴᴛᴇʀᴇꜱᴛ <ᴘᴇɴᴄᴀʀɪᴀɴ> (ⓛ)
╠➺   .ᴘɪɴᴛᴇʀᴇꜱᴛɢᴇꜱᴇʀ
╠➺   .ᴘɪɴᴛɢᴇꜱ
╠➺   .ᴘʟᴀʏ (ⓛ)
╠➺   .ꜱᴏɴɢ (ⓛ)
╠➺   .ꜱꜰɪʟᴇ
╠➺   .ᴛɪᴋᴛᴏᴋɪᴍɢ / ᴛᴛɪᴍɢ <ᴜʀʟ>
╠➺   .ᴛɪᴋᴛᴏᴋ2 <ᴜʀʟ> (ⓛ)
╠➺   .ᴛɪᴋᴛᴏᴋ (ⓛ)
╠➺   .ᴛᴡɪᴛᴛᴇʀ
╠➺   .ɢɪᴍᴀɢᴇ (ⓛ)
╠➺   .ᴘɪɴᴛᴇʀᴇꜱᴛ (ⓛ)
╠➺   .ᴡᴀʟʟᴘᴀᴘᴇʀ <qᴜᴇʀʏ>
╠➺   .ɢɪᴛʜᴜʙꜱᴇᴀʀᴄʜ <ᴘᴇɴᴄᴀʀɪᴀɴ>
╠➺   .ᴘʟᴀʏᴠɪᴅᴇᴏ (ⓛ)
╠➺   .ꜱʜᴏʀᴛ <ᴜʀʟ>
╠➺   .ɪɢꜱ <ʟɪɴᴋ ꜱᴛᴏʀʏ/ʜɪɢʜʟɪɢʜᴛ>
╠➺   .ᴄᴀᴘᴄᴜᴛ <ʟɪɴᴋ ᴄᴀᴘᴄᴜᴛ>
╠➺   .ʏᴛᴍᴘ3 (ⓛ)
╠➺   .ʏᴛᴀ (ⓛ)
╠➺   .ʏᴛꜱʜᴏʀᴛꜱ (ⓛ)
╠➺   .ʏᴛᴍᴘ4 (ⓛ)
╠➺   .ʏᴛᴠ (ⓛ)
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
handler.help = ['menudownload']
handler.tags = ['info']
handler.command = /^(menudownload)$/i

export default handler