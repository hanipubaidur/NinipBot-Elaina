let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*≡ Tautan terdeteksi*
        Kami tidak mengizinkan link dari grup lain\n\n
        Maaf, ${await conn.getName(m.sender)} Kamu Akan Di Kick Karena Melanggar Aturan`)
    if (isAdmin) return m.reply('*Oh, Admin. Ya Maaf Bang, Namanya Manusia Bukan Nabi Boy*')
    if (!isBotAdmin) return m.reply('*Bot Belum Admin_-*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply(`*≡ Tautan terdeteksi*
        Kami Tidak Akan Mengeluarkan Orang\n
        Yang Mengirimkan Link Grup Ini`)
    await conn.sendMessage(m.chat, { delete: m.key })
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

export default handler