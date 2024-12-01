export async function all(m, {
    conn,
    func,
    groupMetadata
}) {

    if (!m.isGroup) return

    let chat = db.data.chats[m.chat]
    if (chat.acc) {
        let mode = await conn.groupMetadata(m.chat)
        if (mode.joinApprovalMode) {
            conn.groupRequestParticipantsList(m.chat).then(async (data) => {
                if (data.length === 0) {
                    false
                } else {
                    for (let i of data) {
                        await conn.groupRequestParticipantsUpdate(m.chat, [i.jid], 'approve')
                        await conn.delay(20000)
                    }
                }
            })
        }
    }
}