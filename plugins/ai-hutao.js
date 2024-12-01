let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);   
  let ouh = await fetch(`https://btch.us.kg/prompt/gpt?prompt=Ubah gaya bicaramu agar lebih tsundere dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Hutao, dan kamu adalah karakter dari game Genshin Impact. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, kamu memiliki sifat seperti cewek tsundere&text=${text}`)
  let gyh = await ouh.json() 
  await conn.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Hutao - C.ai',
        body: 'E L A I N A  M U L T I D E V I C E',
        thumbnailUrl: 'https://telegra.ph/file/7c8df67f6ae21ad094763.jpg',
        sourceUrl: saluran,
        mediaType: 1,
        renderLargerThumbnail: false, 
        showAdAttribution: true
      }}
  })}
handler.command = /^(aihutao|caihutao)$/i
handler.help = ['caihutao','aihutao']
handler.tags = ['character-ai']
handler.premium = false

export default handler;