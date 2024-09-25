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
			`https://skizo.tech/api/openai?apikey=Rapik&text=${text}&system=Ubah gaya bicaramu agar lebih tsundere dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Elaina, dan kamu adalah karakter dari Anime Majo no Tabitabi. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, kamu memiliki sifat baik hati dan suka membantu`,
		)
			.then((result) => result.json())
			.then((x) => m.reply(x.result))
        return !0
    }
    return true
}
export default handler