let handler = async (m) => {

let anu =`
# *MENU ARTIFICIAL INTELLIGENCE* #
╔═━───╍━╍╍┄
╠➺   .ᴀɪɪᴍᴀɢᴇ (ⓛ)
╠➺   .ᴀɪᴠᴏɪᴄᴇ
╠➺   .ᴀɪ
╠➺   .ᴏᴘᴇɴᴀɪ
╠➺   .ɢᴘᴛ
╠➺   .ᴅɪꜰꜰᴜꜱɪᴏɴ (ⓛ)
╠➺   .ɢᴇᴍɪɴɪ
╠➺   .ʙᴀʀᴅ
╠➺   .ᴛᴏᴀɴɪᴍᴇ  (ⓟ)
╠➺   .ᴊᴀᴅɪᴀɴɪᴍᴇ  (ⓟ)
╠➺   .ᴊᴀᴅɪᴢᴏᴍʙɪᴇ (ⓛ) (ⓟ)
╠➺   .ʟᴜᴍɪɴᴀɪ
╠➺   .ʀᴇᴍɪɴɪ (ⓛ)
╠➺   .ᴄᴏʟᴏʀ (ⓛ)
╠➺   .ʜᴅʀ (ⓛ)
╠➺   .ʜᴅ (ⓛ)
╠➺   .ʜᴅ (ⓛ)
╠➺   .ᴛxᴛ2ɪᴍɢ
╠➺   .ᴠᴏɪᴄᴇᴠᴏx (ⓛ)
╚═─━╍╍━╍╾
╔═━───╍━╍╍┄ *ᴄʜᴀʀᴀᴄᴛᴇʀ-ᴀɪ*
╠➺   .ᴄᴀɪʜᴜᴛᴀᴏ
╠➺   .ᴀɪʜᴜᴛᴀᴏ
╠➺   .ᴄᴀɪᴇʟᴀɪɴᴀ
╠➺   .ᴄᴀɪᴍɪᴋᴜ
╠➺   .ᴄᴀɪᴍɪᴋᴀ
╠➺   .ᴄᴀɪʏᴜᴜᴋᴀ
╠➺   .ᴄᴀɪɴᴇᴢᴜᴋᴏ
╠➺   .ᴄᴀɪɴᴏʙᴀʀᴀ
╠➺   .ᴄᴀɪ
╠➺   .ᴀɪᴇʟᴀɪɴᴀ
╚═─━╍╍━╍╾
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
handler.help = ['menuai']
handler.tags = ['info']
handler.command = /^(menuai)$/i

export default handler