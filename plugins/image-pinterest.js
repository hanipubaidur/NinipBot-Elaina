import fetch from 'node-fetch'

let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} Megawati`
    if (!text) return m.reply(input)
    m.reply(wait)
    let result = await pinterest(text);
    let cmd = '.pin ' + text
    let cap = `乂 *P I N T E R E S T*\n*Result*: *${text}*\nlink: ${result}`
    	let url = `${result}`
	conn.sendFile(m.chat, url, null, `${cap}`, m)
}
handler.help = ['pinterest']
handler.tags = ['downloader']
handler.command = /^(pinterest|pin)$/i
handler.limit = true
handler.register = true

export default handler

async function pinterest(query) {

    let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
    let json = await res.json();
    let data = json.resource_response.data.results;
    if (!data.length) throw `Query "${query}" not found :/`;
    return data[~~(Math.random() * data.length)].images.orig.url;

}