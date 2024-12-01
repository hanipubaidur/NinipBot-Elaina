let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://btch.us.kg/prompt/gpt?prompt=Ubah gaya bicaramu agar lebih tsundere dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Yuuka istrinya Rapikz, dan kamu adalah karakter dari game Blue Archive, kamu juga sebagai bendahara dan seorang jenius matematika. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, kamu memiliki sifat yang sopan&text=${text}`)
  let gyh = await ouh.json() 
  await conn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Yuuka - C.ai',
        body: 'Y U U K A B L U E A R C H I V E',
        thumbnailUrl: 'https://telegra.ph/file/a09fdfa84ae96e231c256.jpg',
        sourceUrl: saluran,
        mediaType: 1,
        renderLargerThumbnail: false,
      }
        }
      }, {
        quoted: m
      });
    }
handler.command = /^(aiyuuka|caiyuuka)$/i
handler.help = ['aiyuuka']
handler.tags = ['character-ai']
handler.premium = false
handler.register = true

export default handler;