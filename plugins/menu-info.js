let handler = async (m) => {

let anu =`╔═━───╍━╍╍┄ *ɪɴꜰᴏ*
╠➺   .ᴄᴇᴋɪᴅᴄʜ 
╠➺   .ᴏᴡɴᴇʀ
╠➺   .ᴄʀᴇᴀᴛᴏʀ
╠➺   .ᴜꜱᴇʀ
╠➺   .ʙᴏᴛꜱᴛᴀᴛᴜꜱ
╠➺   .ɢᴀᴍᴇ
╠➺   .ɢᴇᴍᴘᴀ
╠➺   .ʀᴇᴘᴏʀᴛ <ᴛᴇᴋꜱ>
╠➺   .ʀᴇqᴜᴇꜱᴛ <ᴛᴇᴋꜱ>
╠➺   .ʀᴜɴᴛɪᴍᴇ
╠➺   .ꜱᴄʀɪᴘᴛ
╠➺   .ᴛᴇꜱᴛꜱᴘᴇᴇᴅ
╠➺   .ᴛqᴛᴏ
╠➺   .ᴄʀᴇᴅɪᴛ
╠➺   .ʙᴀɴɴᴇᴅʟɪꜱᴛ
╠➺   .ʟɪꜱᴛɢᴄ
╠➺   .ᴘʀᴏꜰɪʟᴇ [@ᴜꜱᴇʀ]
╠➺   .ᴘʀᴇᴍʟɪꜱᴛ [ᴀɴɢᴋᴀ]
╠➺   .ᴘʀᴏꜰɪʟᴇ (ⓛ)
╠➺   .ᴘʀᴏꜰɪʟᴇ *⧼@ᴜꜱᴇʀ⧽* (ⓛ)
╠➺   .ʀᴏʟᴇ
╠➺   .ꜱᴇʀᴠᴇʀ
╠➺   .ᴘɪɴɢ
╠➺   .ꜱᴘᴇᴇᴅ
╠➺   .ᴠᴇʀꜱɪᴏɴ
╚═─━╍╍━╍╾
╔═━───╍━╍╍┄ *ᴍᴇɴᴜ*
╠➺   .ᴍᴇɴᴜ
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
handler.help = ['menuinfo']
handler.tags = ['info']
handler.command = /^(menuinfo)$/i

export default handler