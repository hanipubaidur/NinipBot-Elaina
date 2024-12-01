export async function before(m) {
    this.automakan = this.automakan || {};
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
    let id = m.chat;
  
    let jadwalMakan = {
      Sarapan: "06:15-07.00",
      Cemilan: "10:00-10.45",
      Siang: "13:00-15.00",
      Malam: "18:00-21.00",
    };
    const date = new Date((new Date).toLocaleString("en-US", {
      timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [makan, waktu] of Object.entries(jadwalMakan)) {
      const waktuParts = waktu.split("-");
      const startTime = waktuParts[0];
      const endTime = waktuParts[1] || startTime;
  
      const startTimeHours = parseInt(startTime.split(":")[0]);
      const startTimeMinutes = parseInt(startTime.split(":")[1]);
      const endTimeHours = parseInt(endTime.split(":")[0]);
      const endTimeMinutes = parseInt(endTime.split(":")[1]);
  
      const timeNowHours = parseInt(timeNow.split(":")[0]);
      const timeNowMinutes = parseInt(timeNow.split(":")[1]);
  
      const timeNowTotalMinutes = timeNowHours * 60 + timeNowMinutes;
      const startTimeTotalMinutes = startTimeHours * 60 + startTimeMinutes;
      const endTimeTotalMinutes = endTimeHours * 60 + endTimeMinutes;
  
      if (timeNowTotalMinutes >= startTimeTotalMinutes && timeNowTotalMinutes <= endTimeTotalMinutes) {
        let caption;
        if (makan === 'Sarapan') {
          caption = `Halo kak @${who.split`@`[0]}, Sudah Sarapan belum?\n\nWaktu Sarapan telah tiba! Isi piringmu dengan karbohidrat dari nasi, protein dari telur atau tempe, serat dari sayuran, dan jangan lupa vitamin dan juga air. Tubuhmu butuh nutrisi lengkap untuk beraktivitas! 🙂.\n`
        } else if (makan === 'Cemilan') {
          caption = `Halo kak @${who.split`@`[0]}, Sudah Nyemil belum nih?\n\nWaktu Cemilan telah tiba! Pilihlah jajanan yang ringan dan seimbang, seperti buah atau kacang-kacangan. Jangan lupa minum air untuk menjaga hidrasi tubuhmu! 🙂.\n`
        } else if (makan === 'Siang') {
          caption = `Halo kak @${who.split`@`[0]}, Sudah Makan Siang Belum?\n\nWaktu Makan Siang telah tiba! Bawa bekal dari rumah atau beli sendiri? Apabila beli sendiri pastikan untuk memilih makanan yang seimbang dan bergizi. Jangan lupa minum air untuk menjaga hidrasi tubuhmu! 🙂.\n`
        } else if (makan === 'Malam') {
          caption = `Halo kak @${who.split`@`[0]}, Sudah Makan Malam Belum?\n\nWaktu Makan Malam telah tiba! Isi piringmu dengan makanan yang seimbang dan bergizi, dan jangan lupa minum air untuk menjaga hidrasi tubuhmu. Persiapkan dirimu untuk tidur yang nyenyak! 🙂.\n`
        }
        if (!this.automakan[id] || !this.automakan[id][who]) {
          if (!this.automakan[id]) this.automakan[id] = {};
          this.automakan[id][who] = true;
          setTimeout(() => {
            delete this.automakan[id][who];
          }, 86400000); // 1 day timeout
  
          this.reply(m.chat, caption, null, {
            contextInfo: {
              mentionedJid: [who]
            }
          });
        }
      }
    }
  }
  
  export const disabled = false;