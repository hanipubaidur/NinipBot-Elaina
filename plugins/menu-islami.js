let handler = async (m) => {

let anu =`
*MENU ISLAMI*
╔═━───╍━╍╍┄ *ɪꜱʟᴀᴍɪ*
╠➺   .ᴀʟqᴜʀᴀɴ <114> <1>
╠➺   .qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ (ⓛ)
╰─── –
╔═━───╍━╍╍┄ *qᴜʀᴀɴ*
╠➺   .ᴀꜱᴍᴀᴜʟʜᴜꜱɴᴀ [1-99]
╠➺   .ᴋɪꜱᴀʜɴᴀʙɪ <ɴᴀᴍᴇ> (ⓛ)
╠➺   .ꜱᴀʟᴀᴛ <ᴅᴀᴇʀᴀʜ>
╠➺   .ɴɪᴀᴛꜱʜᴏʟᴀᴛ
╠➺   .ᴀʏᴀᴛᴋᴜʀꜱɪ (ⓛ)
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
handler.help = ['menuislami']
handler.tags = ['info']
handler.command = /^(menuislami)$/i

export default handler