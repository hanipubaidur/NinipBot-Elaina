import fetch from "node-fetch";
let handler = async (m, { conn }) => {
  try {
    const apiUrl = "https://api.miftahganzz.my.id/api/random/asupanrandom?type=video&apikey=global";
    const response = await fetch(apiUrl);
    const buffer = await response.buffer(); // Convert the response to a buffer

    if (buffer) {
      await conn.sendFile(m.chat, buffer, null, "*Done*",m);
    } else {
      m.reply("Maaf, video asupan tidak ditemukan");
    }
  } catch (e) {
    console.log(e);
    m.reply("Maaf, terjadi kesalahan saat mengambil video asupan");
  }
};

handler.help = ["asupan"];
handler.tags = ["downloader", "asupan"];
handler.command = /^asupan$/i;
handler.limit = true;

export default handler;