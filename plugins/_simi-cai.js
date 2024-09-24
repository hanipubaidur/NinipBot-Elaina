import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m, {text}) => {
    let chat = global.db.data.chats[m.chat]
    let last = []
    if (chat.simiC && !chat.isBanned ) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        last.push += m.text
        await fetch(
			`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}, ${last[0]}&name=Ninip Ganteng`,
		)
			.then((result) => result.json())
			.then((x) => m.reply(x.result))
        return !0
    }
    return true
}
export default handler