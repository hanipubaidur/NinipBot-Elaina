import { join } from 'path'
import { promises } from 'fs'

let handler = async (m, { args, usedPrefix, __dirname }) => {
let imgr = flaaa.getRandom()
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let user = global.db.data.users[m.sender]
    if (user.health >= 100) return m.reply(`
Your ❤️health is full!
`.trim())
    const heal = 40 + (user.cat * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    if (user.potion < count) return conn.sendFile(m.chat, imgr + 'lowpotion', '', 
`*–『 INSUFFICIENT POTION 』–*\nʏᴏᴜ ɴᴇᴇᴅ ᴛᴏ ʙᴜʏ ${count - user.potion} ᴍᴏʀᴇ 🥤ᴩᴏᴛɪᴏɴ ᴛᴏ ʜᴇᴀʟ.
ʏᴏᴜ'ᴠᴇ ${user.potion} 🥤ᴩᴏᴛɪᴏɴ ɪɴ ʙᴀɢ.
⛊━─┈────────┈─━⛊
💁🏻‍♂ ᴛɪᴩ :
'ʙᴜʏ🥤ᴩᴏᴛɪᴏɴ' | 'ᴀsᴋ ᴛᴏ ᴀʟʟ'
`.trim(), m)
    user.potion -= count * 1
    user.health += heal * count
    
conn.sendFile(m.chat, imgr + 'fullhealth', '', `*━┈━┈━『 FULL HEALTH 』━┈━┈━*\nsᴜᴄᴄᴇssғᴜʟʟʏ ${count} 🥤ᴩᴏᴛɪᴏɴ ᴜsᴇ ᴛᴏ ʀᴇᴄᴏᴠᴇʀ ʜᴇᴀʟᴛʜ.`, m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}