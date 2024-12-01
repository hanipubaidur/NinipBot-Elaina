let handler = async (m) => {

let anu =`PM OWNER AJA`
await m.reply(anu)
}
handler.help = ['sc','script']
handler.tags = ['info']
handler.command = /^(sc|script)$/i

export default handler