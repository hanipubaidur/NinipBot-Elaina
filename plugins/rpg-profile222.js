import PhoneNumber from 'awesome-phonenumber'
import { xpRange } from '../lib/levelling.js'
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == who) : {}
	let number = who.split('@')[0]
	//let pp = await conn.updateProfilePicture(who)
	let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
    let now = new Date() * 1
    let { min, xp, max } = xpRange(level, global.multiplier)
    let username = conn.getName(who)
   // let buffer = await getBuffer(pp)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let jodoh = `Berpacaran @${pasangan.split`@`[0]}`
    let str = `▧「 *P r o f i l e - U s e r* 」
│𖡛 *Name:* ${username} 
│𖡛 *Tag:* ${registered ? '' + name + ' ': ''} ${about ? '\n│𖡛 *About:*  ' + about : ''}
│𖡛 *Status:* ${pasangan ? jodoh : 'Single' }
│𖡛 *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│𖡛 *Link:* https://wa.me/${who.split`@`[0]}${registered ? '\n│𖡛 *Age:* ' + age : ''}
│𖡛‍ *Register:* ${registered ? 'Sudah Terdaftar' : 'Belum Terdaftar'}
│𖡛 *Date Register:* ${registered ? ' (' + new Date(regTime).toLocaleString() + ')' : ''}
│𖡛 *Premium:* ${premium ? 'Premium' : 'Free'}
│𖡛 *Expired Premium:* ${(premiumDate - now) > 1 ? msToDate(premiumDate - now) : '*No setting expired*'}
│𖡛 *Xp:* Total ${exp} (${exp - min} / ${xp})
│𖡛 *Level:* ${level}
│𖡛 *Role:* ${role}
│𖡛 *Limit:* ${limit}
│𖡛 *Money:* ${money}
└──···
`.trim()
 	await conn.sendFile(m.chat, pp, 'pp.jpg', str, m)
 
}
handler.help = ['profile','profile *⧼@user⧽*']
handler.tags = ['info','main']
handler.command = /^(profilerpg|pprpg|merpg)$/i
handler.register = true
handler.premium = false
handler.limit = true

export default handler 
function msToDate(ms) {
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }
  
  const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}