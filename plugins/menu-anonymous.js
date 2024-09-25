let handler = async (m) => {

let anu =`╔═━───╍━╍╍┄ *ᴀɴᴏɴʏᴍᴏᴜꜱ*
╠➺   .ꜱᴛᴀʀᴛ
╠➺   .ʟᴇᴀᴠᴇ
╠➺   .ɴᴇxᴛ
╠➺   .ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
╚═─━╍╍━╍╾
`
await m.reply(anu)
}
handler.help = ['menuanonymous']
handler.tags = ['info']
handler.command = /^(menuanonymous)$/i

export default handler