let buatall = 1
let handler = async (m, { conn, args, usedPrefix }) => {
let imgr = flaaa.getRandom()
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return m.reply ("Masih ada yang melakukan casino disini, tunggu sampai selesai!!")
    else conn.casino[m.chat] = true
    if (args.length < 1) return conn.reply(m.chat, usedPrefix + command + " <jumlah>\n" + usedPrefix + command + " 1000", m)
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (global.db.data.users[m.sender].exp >= count * 1) {
            global.db.data.users[m.sender].exp -= count * 1
            if (Aku > Kamu) {
    let caption = `                💰 *C A S I N O* 💰\n\n${htjava} *@${m.sender.split("@")[0]}* - [USER]\n┗┅⭑ ${Kamu} Point\n${htjava} *@${conn.user.jid.split("@")[0]}* - [BOT]\n┗┅⭑ ${Aku} Point\n\n❌ *LOSE* ❌\nKamu kehilangan ${count} Uang(xp)`.trim()
    conn.sendFile(m.chat, imgr + "LOSER", '', caption, m, { mentions: conn.parseMention(caption) })
    } else if (Aku < Kamu) {
    let caption = `                💰 *C A S I N O* 💰\n\n${htjava} *@${m.sender.split("@")[0]}* - [USER]\n┗┅⭑ ${Kamu} Point\n${htjava} *@${conn.user.jid.split("@")[0]}* - [BOT]\n┗┅⭑ ${Aku} Point\n\n🎉 *WIN* 🎉\nKamu mendapatkan ${count * 2} Uang(xp)`.trim()
    conn.sendFile(m.chat, imgr + "WINNER", '', caption, m, { mentions: conn.parseMention(caption) })
    } else {
    let caption = `                💰 *C A S I N O* 💰\n\n${htjava} *@${m.sender.split("@")[0]}* - [USER]\n┗┅⭑ ${Kamu} Point\n${htjava} *@${conn.user.jid.split("@")[0]}* - [BOT]\n┗┅⭑ ${Aku} Point\n\n🔖*DRAW* 🔖\nKamu mendapatkan ${count * 1} Uang(xp)`.trim()
    conn.sendFile(m.chat, imgr + "DRAW", '', caption, m, { mentions: conn.parseMention(caption) })
            }
        } else conn.reply(m.chat, `Uang(xp) kamu tidak mencukupi untuk Casino silahkan *.claim* terlebih dahulu!`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply("Error!!")
    } finally {
        delete conn.casino[m.chat]
    }
}
handler.help = ["casino <jumlah>"]
handler.tags = ["rpg"]
handler.command = /^(casino|csn)$/i
export default handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
