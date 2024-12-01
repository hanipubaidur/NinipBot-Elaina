let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://btch.us.kg/prompt/gpt?prompt=Ubah gaya bicaramu agar lebih tsundere dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Elaina, dan kamu adalah karakter dari Anime Majo no Tabitabi. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, kamu memiliki sifat baik hati dan suka membantu&text=${text}`)
  let gyh = await ouh.json() 
  await conn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Elaina - C.ai',
        body: 'E L A I N A  M U L T I D E V I C E',
        thumbnailUrl: 'https://telegra.ph/file/736fb4ddc6e3ba12dc19a.jpg',
        sourceUrl: saluran,
        mediaType: 1,
        renderLargerThumbnail: false, 
      }
        }
      }, {
        quoted: m
      });
    }
handler.command = /^(caielaina)$/i
handler.help = ['caielaina']
handler.tags = ['character-ai']
handler.premium = false
handler.register = true

export default handler;