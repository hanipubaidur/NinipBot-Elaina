let handler = async (m) => {

let anu =` ╔═━───╍━╍╍┄ *ᴍᴀɪɴ*
╠➺   @ᴠᴇʀɪꜰʏ
╠➺   .ᴀꜰᴋ [ᴀʟᴀꜱᴀɴ]
╠➺   .ᴅᴀꜰᴛᴀʀ
╠➺   .ᴅᴏɴᴀꜱɪ
╠➺   .ᴊᴀᴅɪᴀɴ
╠➺   .ɢᴄʙᴏᴛ
╠➺   .ɢᴄᴇʟᴀɪɴᴀ
╠➺   .ᴅᴀꜱʜʙᴏᴀʀᴅ (ⓛ)
╠➺   .ᴅᴀꜱʜ (ⓛ)
╠➺   .ᴠɪᴇᴡꜱ (ⓛ)
╠➺   .ᴛᴏᴛᴀʟꜰᴇᴀᴛᴜʀᴇ
╠➺   .ᴄᴇᴋꜱɴ
╠➺   .ʟɪᴍɪᴛ [@ᴜꜱᴇʀ]
╠➺   ᴍᴏᴅᴇ
╠➺   .ɴᴏᴡᴀ <ɴᴜᴍʙᴇʀ>
╠➺   .ᴏʀᴅᴇʀ
╠➺   .ᴘʀᴏꜰɪʟᴇ (ⓛ)
╠➺   .ᴘʀᴏꜰɪʟᴇ *⧼@ᴜꜱᴇʀ⧽* (ⓛ)
╠➺   .ɢᴇᴛᴍꜱɢ
╠➺   .ᴜɴʀᴇɢ
╰─── –
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
handler.help = ['menuuser']
handler.tags = ['info']
handler.command = /^(menuuser)$/i

export default handler