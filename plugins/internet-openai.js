import fetch from 'node-fetch';
let handler = async (m, { conn, command, text }) => {

    if (!text) throw `Textnya mana? Contoh:\n.${command} Apa arti ai?`;	
  let apii = await fetch(`https://btch.us.kg/gpt4?text=${text}`)
  let res = await apii.json()
  conn.reply(m.chat, `
 *[ CHAT GPT ]*
 
${res.result}
`.trim(), m)
}
handler.command = handler.help = ['ai','openai','gpt'];
handler.tags = ['tools'];
handler.premium = false;
handler.register = true
export default handler;