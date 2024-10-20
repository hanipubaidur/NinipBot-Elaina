let handler = async (m) => {

let anu =`╔═━───╍━╍╍┄ *ꜱᴛɪᴄᴋᴇʀ*
╠➺   .ᴀᴛᴛᴘ <ᴛᴇᴋꜱ> (ⓛ)
╠➺   .ꜱᴛɪᴋᴇʀᴛᴇʟᴇɢʀᴀᴍ <ᴜʀʟ> (ⓛ) (ⓟ)
╠➺   .qᴄ (ⓛ)
╠➺   .ʙᴏɴᴋ @ᴜꜱᴇʀ
╠➺   .ʙᴏɴᴋ
╠➺   .ᴄᴏʟᴏɴɢ <ʀᴇᴘʟʏ ꜱᴛɪᴄᴋᴇʀ>
╠➺   .ᴄᴏʟᴏɴɢ <ʀᴇᴘʟʏ ɢᴀᴍʙᴀʀ>
╠➺   .ᴄᴏʟᴏɴɢ <ᴜʀʟ/ʟɪɴᴋ>
╠➺   .ᴇᴍᴏᴊɪ
╠➺   .ᴇᴍᴏᴊɪᴍɪx
╠➺   .ɢᴇᴛᴇxɪꜰ
╠➺   .ꜱᴍᴇᴍᴇ
╠➺   .ᴛᴏᴠɪᴅᴇᴏ
╠➺   .ᴡᴍ <ᴘᴀᴄᴋɴᴀᴍᴇ>|<ᴀᴜᴛʜᴏʀ>
╠➺   .ᴄᴀʀɪꜱᴛɪᴋᴇʀ <qᴜᴇʀʏ>
╰─── –
╔═━───╍━╍╍┄ *ɢᴇɴᴇʀᴀʟ*
╠➺   .ꜱᴛɪᴋᴇʀ
╠➺   .ᴛᴏɪᴍɢ
╰─── –
`
await conn.sendMessage(m.chat, {
  text: `${anu}`,
      contextInfo: {
      externalAdReply: {
        title: 'MENU LIST',
        body: wm,
        thumbnailUrl: 'https://telegra.ph/file/94b9d0b5ef233c97e00e1.jpg',
        sourceUrl: saluran,
        mediaType: 1,
        renderLargerThumbnail: true, 
        showAdAttribution: true
      }}
  })}
handler.help = ['menusticker']
handler.tags = ['info']
handler.command = /^(menusticker)$/i

export default handler