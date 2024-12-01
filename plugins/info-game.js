import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, generateWAMessageFromContent, }) => {
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw, statusupdate, autogetmsg, antivirus, publicjoin } = global.db.data.settings[conn.user.jid]
    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
    const block = await conn.fetchBlocklist()
    
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let sts = `─₍🍁₎❝┊ *ɢᴀᴍᴇ*
┊꒱ ☁   .ʙᴏᴍʙ
┊꒱ ☁   .ᴄʜᴇꜱꜱ [ᴅᴀʀɪ ᴋᴇ]
┊꒱ ☁   .ᴄʜᴇꜱꜱ ᴅᴇʟᴇᴛᴇ
┊꒱ ☁   .ᴄʜᴇꜱꜱ ᴊᴏɪɴ
┊꒱ ☁   .ᴄʜᴇꜱꜱ ꜱᴛᴀʀᴛ
┊꒱ ☁   .ᴄᴀᴋʟᴏɴᴛᴏɴɢ
┊꒱ ☁   .ꜰᴀᴍɪʟʏ100
┊꒱ ☁   .ᴍᴀᴛʜ <ᴍᴏᴅᴇ>
┊꒱ ☁   .ᴘᴘᴛ <ʀᴏᴄᴋ/ᴘᴀᴘᴇʀ/ꜱᴄɪꜱꜱᴏʀꜱ>
┊꒱ ☁   .ꜱɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
┊꒱ ☁   .ꜱᴜꜱᴜɴᴋᴀᴛᴀ
┊꒱ ☁   .ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
┊꒱ ☁   .ᴀᴛᴛᴀᴄᴋ
┊꒱ ☁   .ᴀᴛᴋ
┊꒱ ☁   .ᴡᴀʀ
┊꒱ ☁   .ᴛᴇʙᴀᴋᴋᴀᴛᴀ
┊꒱ ☁   .ᴛɪᴄᴛᴀᴄᴛᴏᴇ [ᴄᴜꜱᴛᴏᴍ ʀᴏᴏᴍ ɴᴀᴍᴇ]
┊꒱ ☁   .ᴛᴛᴛ [ᴄᴜꜱᴛᴏᴍ ʀᴏᴏᴍ ɴᴀᴍᴇ]
┊꒱ ☁   .ꜰɪɢʜᴛᴄᴇɴᴛᴀᴜʀ (ⓛ)
┊꒱ ☁   .ꜰɪɢʜᴛɢʀɪꜰꜰɪɴ (ⓛ)
┊꒱ ☁   .ꜰɪɢʜᴛᴋᴜᴄɪɴɢ (ⓛ)
┊꒱ ☁   .ꜰɪɢʜᴛᴋʏᴜʙɪ (ⓛ)
┊꒱ ☁   .ꜰɪɢʜᴛɴᴀɢᴀ (ⓛ)
┊꒱ ☁   .ꜰɪɢʜᴛᴘʜᴏɴɪx (ⓛ)
┊꒱ ☁   .ʜᴜɴᴛ (ⓛ)
┊꒱ ☁   .ᴘᴏʟɪꜱɪ
┊꒱ ☁   .ᴘᴏʟɪꜱɪ ᴄᴀʀɪ
┊꒱ ☁   .ᴘᴏʟɪꜱɪ ꜱᴛᴀᴛᴜꜱ
┊꒱ ☁   .ᴘᴏʟɪꜱɪ ɪᴛᴇᴍ <ɪᴛᴇᴍ>
┊꒱ ☁   .ᴘᴏʟɪꜱɪ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
┊꒱ ☁   .ᴘᴏʟɪꜱɪ ꜱᴛᴏᴘ
┊꒱ ☁   .ꜱʟᴏᴛ
┊꒱ ☁   .ᴊᴀᴄᴋᴘᴏᴛ
┊꒱ ☁   .ꜱʟᴏᴛ
┊꒱ ☁   .ᴡᴡ
┊꒱ ☁   .ᴡᴡᴊᴏɪɴ
┊꒱ ☁   .ᴡᴡʟᴇꜰᴛ
┊꒱ ☁   .ᴡᴡᴘʟᴀʏᴇʀ
┊꒱ ☁   .ᴡᴡꜱᴛᴀʀᴛ
╰─── –
─₍🍁₎❝┊ *ʀᴘɢ*
┊꒱ ☁   .ɢᴀᴍᴇ
┊꒱ ☁   .ᴀᴅᴠᴇɴᴛᴜʀᴇ
┊꒱ ☁   .ʙᴀɴᴋ
┊꒱ ☁   .ʙᴀɴꜱᴏꜱ
┊꒱ ☁   .ʙᴇʀʙɪꜱɴɪꜱ (ⓛ)
┊꒱ ☁   .ʙᴇʀʙᴜʀᴜ
┊꒱ ☁   .ʙᴇʀᴅᴀɢᴀɴɢ @[ᴛᴀɢ] (ⓛ)
┊꒱ ☁   .ʙᴇʀᴋᴇʙᴏɴ (ⓛ)
┊꒱ ☁   .ᴊᴜᴅɪ [ᴊᴜᴍʟᴀʜ]
┊꒱ ☁   .ʙᴏɴᴜꜱ
┊꒱ ☁   .ʜᴀᴅɪᴀʜ
┊꒱ ☁   .ʙᴜɪʟᴅ <ᴀʀɢꜱ>
┊꒱ ☁   .ᴜᴘɢʀᴀᴅᴇ <ꜱᴇʟʟ|ʙᴜʏ> <ᴀʀɢꜱ>
┊꒱ ☁   .ʙᴜʟᴀɴᴀɴ
┊꒱ ☁   .ʙᴜʏɢɪꜰᴛ <ᴛᴏᴛᴀʟ>
┊꒱ ☁   .ᴄᴀꜱɪɴᴏ <ᴊᴜᴍʟᴀʜ> @ʟᴀᴡᴀɴ
┊꒱ ☁   .ᴄᴀꜱɪɴᴏ <ᴊᴜᴍʟᴀʜ>
┊꒱ ☁   .ʜᴜᴛᴀɴɢ
┊꒱ ☁   .ᴄʜᴏᴘ
┊꒱ ☁   .ᴄʜᴏᴘɪɢ
┊꒱ ☁   .ᴄᴏʟʟᴇᴄᴛ
┊꒱ ☁   .ᴍᴀꜱᴀᴋ <ᴍᴀꜱᴀᴋᴀɴ> <ᴀʀɢꜱ>
┊꒱ ☁   .ᴄᴏᴏᴋ <ᴍᴀꜱᴀᴋᴀɴ> <ᴀʀɢꜱ>
┊꒱ ☁   .ᴄᴅ
┊꒱ ☁   .ᴄᴏᴏʟᴅᴏᴡɴ
┊꒱ ☁   .ᴅᴜᴇʟ @ᴛᴀɢ
┊꒱ ☁   .ᴅᴜɴɢᴇᴏɴ [ɴᴀᴍᴀ ʀᴏᴏᴍ]
┊꒱ ☁   .ᴇᴀᴛ
┊꒱ ☁   .ᴍᴀᴋᴀɴ
┊꒱ ☁   .ꜰᴇᴇᴅ [ᴘᴇᴛ ᴛʏᴘᴇ]
┊꒱ ☁   .ꜰʀᴇᴇɢɪꜰᴛ <ᴋᴏᴅᴇ>
┊꒱ ☁   .ɢᴀᴊɪ
┊꒱ ☁   .ɢᴀᴊɪᴀɴ
┊꒱ ☁   .ʜᴇᴀʟ
┊꒱ ☁   .ɪɴᴠᴇɴᴛᴏʀʏ
┊꒱ ☁   .ɪɴᴠ
┊꒱ ☁   .ɪqᴛᴇꜱᴛ
┊꒱ ☁   .ᴋᴀɴᴅᴀɴɢ
┊꒱ ☁   .ᴋᴇʀᴊᴀ
┊꒱ ☁   .ᴡᴏʀᴋ
┊꒱ ☁   .ᴋᴏʙᴏʏ
┊꒱ ☁   .ᴍᴀʟɪɴɢ (ⓛ)
┊꒱ ☁   .ꜰɪꜱʜɪɴɢ <ᴀʀɢꜱ>
┊꒱ ☁   .ᴍᴇɴᴛʀᴀɴꜱꜰᴇʀ <ᴀʀɢꜱ>
┊꒱ ☁   .ᴍᴇʀᴀᴄɪᴋ [ᴛʏᴘᴇ] (ⓛ)
┊꒱ ☁   .ᴍᴇʀᴀᴍᴘᴏᴋ *@ᴛᴀɢ* (ⓛ)
┊꒱ ☁   .ᴍɪɴɢɢᴜᴀɴ
┊꒱ ☁   .ᴍɪɴɪɴɢ
┊꒱ ☁   .ᴍᴏɴᴛʜʟʏ
┊꒱ ☁   .ᴍᴜʟᴜɴɢ (ⓛ)
┊꒱ ☁   .ᴍʏ
┊꒱ ☁   .ɴᴀʙᴜɴɢ <ᴊᴜᴍʟᴀʜ>
┊꒱ ☁   .ɴᴀᴍʙᴀɴɢ
┊꒱ ☁   .ɴᴇʙᴀɴɢ
┊꒱ ☁   .ɴɢᴇᴡᴇ  (ⓟ)
┊꒱ ☁   .ɴɢᴏᴄᴏᴋ
┊꒱ ☁   .ɴɢᴜʟɪ
┊꒱ ☁   .ᴏᴊᴇᴋ
┊꒱ ☁   .ᴏᴘᴇɴᴄʀᴀᴛᴇ [ᴄʀᴀᴛᴇ] [ᴄᴏᴜɴᴛ]
┊꒱ ☁   .ᴏᴘᴇɴ [ᴄʀᴀᴛᴇ] [ᴄᴏᴜɴᴛ]
┊꒱ ☁   .ᴘᴀꜱᴀʀ <ᴊᴜᴀʟ> <ᴀʀɢꜱ>
┊꒱ ☁   .ᴘᴇᴛꜱʜᴏᴘ
┊꒱ ☁   .ᴇxᴘᴏɪɴᴛ *<ᴛʏᴘᴇ|ᴊᴜᴍʟᴀʜ>*
┊꒱ ☁   .ᴘʀᴏꜰɪʟᴇʀᴘɢ <ᴜʀʟ>
┊꒱ ☁   .qᴜᴇꜱᴛɢᴀᴍᴇ
┊꒱ ☁   .ʀᴀᴍᴜᴀɴ [ᴘᴇᴛ ᴛʏᴘᴇ] (ⓛ)
┊꒱ ☁   .ʀᴇᴅᴇᴇᴍ
┊꒱ ☁   .ʀᴇᴘᴀɪʀ
┊꒱ ☁   .ʀᴏʙ
┊꒱ ☁   .ʀᴏᴋᴇᴛ
┊꒱ ☁   .ʙᴜʏ [ɪᴛᴇᴍ] [ᴄᴏᴜɴᴛ]
┊꒱ ☁   .ꜱᴇʟʟ [ɪᴛᴇᴍ] [ᴄᴏᴜɴᴛ]
┊꒱ ☁   .ꜱʜᴏᴘꜰɪꜱʜ <ꜱᴇʟʟ|ʙᴜʏ> <ᴀʀɢꜱ> (ⓛ)
┊꒱ ☁   .ꜱʜᴏᴘ <ꜱᴇʟʟ|ʙᴜʏ> <ᴀʀɢꜱ> (ⓛ)
┊꒱ ☁   .ꜱᴇʟᴇᴄᴛꜱᴋɪʟʟ <ᴛʏᴘᴇ>
┊꒱ ☁   .ꜱʟᴏᴛ
┊꒱ ☁   .ᴊᴀᴄᴋᴘᴏᴛ
┊꒱ ☁   .ꜱᴜᴍʙᴀɴɢᴀɴ [ᴊᴜᴍʟᴀʜ]
┊꒱ ☁   .ᴛᴀᴍʙᴀɴɢ
┊꒱ ☁   .ᴛᴀʀɪᴋ <ᴊᴜᴍʟᴀʜ>
┊꒱ ☁   .ɢʀᴀʙ
┊꒱ ☁   .ᴛʀᴀɴꜱꜰᴇʀ [ᴛʏᴘᴇ] [ᴊᴜᴍʟᴀʜ] [@ᴛᴀɢ]
┊꒱ ☁   .ᴛꜰ [ᴛʏᴘᴇ] [ᴊᴜᴍʟᴀʜ] [@ᴛᴀɢ]
┊꒱ ☁   .ᴜᴘɢʀᴀᴅᴇ
┊꒱ ☁   .ᴜꜱᴇ <ɪᴛᴇᴍ> <ᴊᴜᴍʟᴀʜ>
┊꒱ ☁   .ᴡᴇᴇᴋʟʏ
┊꒱ ☁   .ᴘᴇᴛᴜᴀʟᴀɴɢ
┊꒱ ☁   .ᴡᴏʀᴋ
╰─── –  
─₍🍁₎❝┊ *xᴘ*
┊꒱ ☁   .ʙᴜʏʟɪᴍɪᴛ <ᴊᴜᴍʟᴀʜ>
┊꒱ ☁   .ᴅᴇʟʟɪᴍɪᴛ @ᴜꜱᴇʀ <ᴊᴜᴍʟᴀʜ ʟɪᴍɪᴛ>
┊꒱ ☁   .ʟᴇᴠᴇʟᴜᴘ
┊꒱ ☁   .ᴅᴀꜰᴛᴀʀ <ɴᴀᴍᴀ>.<ᴜᴍᴜʀ>
┊꒱ ☁   .ʀᴇɢɪꜱᴛᴇʀ <ɴᴀᴍᴀ>.<ᴜᴍᴜʀ>
┊꒱ ☁   .ᴘʀᴏꜰɪʟᴇ [@ᴜꜱᴇʀ]
┊꒱ ☁   .ᴜɴʀᴇɢ
┊꒱ ☁   .ᴄᴜᴘᴏɴ [@ᴜꜱᴇʀ] (ⓛ)
┊꒱ ☁   .ᴅᴀɪʟʏ
┊꒱ ☁   .ᴄʟᴀɪᴍ
┊꒱ ☁   .ʜᴏᴜʀʟʏ
╰─── –
ᴇʟᴀɪɴᴀ-ᴀɪ`
await conn.sendMessage(m.chat, {
	        video: fs.readFileSync('./menuvid/infobot.mp4'),
            mimetype: 'video/mp4',
            fileLength: 100000,
            caption: sts,
            gifPlayback: true,
            gifAttribution: 5,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    forwardingScore: 2023,
                    title: 'ɪ ɴ ғ ᴏ  ᴇ ʟ ᴀ ɪ ɴ ᴀ',
                    thumbnailUrl: 'https://telegra.ph/file/8345a7d4161c3eb472a39.jpg',
                    sourceUrl: saluran,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    mentionedJid: [m.sender]
	}}}, { quoted: m,ephemeralExpiration: 86400});
	let anjay = fs.readFileSync('./vn/infobot.mp3')
      
	conn.sendFile(m.chat, anjay, "Hayanasi-mp3", null, m, true, {
		type: 'audioMessage',  
 ptt: true, 
seconds: 18,
fileLength: 18,
 ptt: true, contextInfo: { forwardingScore: 999, isForwarded: false, externalAdReply: {title: 'ᴇʟᴀɪɴᴀ ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ', body: wm, sourceUrl: saluran, thumbnail: await (await fetch(thumb)).buffer(),}}  
  }) 
}
handler.help = ['game']
handler.tags = ['info']
handler.command = /^(game)?$/i

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
