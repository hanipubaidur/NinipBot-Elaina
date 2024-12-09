let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));
import { format } from 'util';

export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    let chat = global.db.data.chats[m.chat]
    if (chat.antiSpam) {
        if (m.sender in this.spam) {
            this.spam[m.sender].count++
            if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
                if (this.spam[m.sender].count > 5) {
                    global.db.data.users[m.sender].banned = true
                    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
                    let caption = ` Banned *@${who.split("@")[0]}* Jangan spam kak!`
                    this.reply(m.chat, caption, m)
                }
                this.spam[m.sender].count = 0
                this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            }
        }
        else
            this.spam[m.sender] = {
                jid: m.sender,
                count: 0,
                lastspam: 0
            }
    }
}

export async function before(m, { isAdmin, isBotAdmin }) {
    let chat = db.data.chats[m.chat]
    if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
    if (!chat.viewonce || chat.isBanned) return
    if (m.mtype == 'viewOnceMessageV2') {
        let msg = m.message.viewOnceMessageV2.message
        let type = Object.keys(msg)[0]
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
        let buffer = Buffer.from([])
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk])
        }
        if (/video/.test(type)) {
            return this.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
        } else if (/image/.test(type)) {
            return this.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
        }
    }
}
