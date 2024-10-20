let handler = async (m, {
    conn,
    groupMetadata,
    args,
    usedPrefix,
    command
}) => {
    let ids = groupMetadata.participants.filter(p => !p.admin || p.superadmin).map((v) => v.id)
    let text
    let listSections = []
    Object.keys(ids).map((v, index) => {
        listSections.push(["Result [ " + ++index + ' ]', [
            ['❌ KICK ' + conn.getName(ids[v]), usedPrefix + command + ' ' + ids[v], '']
        ]])
    })
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.sender) {
        text = m.quoted.sender
    } else return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, '⚡ Silakan pilih User', author, "☂️ M O D E L ☂️", listSections, m)

    if (!ids.includes(text)) throw 'Dia Sudah Out'
    return conn.groupParticipantsUpdate(m.chat, [text], 'remove')
}
handler.help = ['rkick', '-'].map(v => 'g' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(rkick|rkik|replykick|kickreply)$/i

handler.owner = true
handler.group = true
handler.botAdmin = true

export default handler