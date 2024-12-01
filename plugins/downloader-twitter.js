import axios from 'axios';
import cheerio from 'cheerio';
import FormData from 'form-data';

const scrapeTwitter = async (link) => {
    const form = new FormData();
    form.append("q", link);
    form.append("lang", "id");

    const result = {
        status: 200,
        creator: "David XD",
        result: {}
    };

    try {
        const response = await axios("https://x2twitter.com/api/ajaxSearch", {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cookie": "_gid=GA1.2.1642260851.1718419271; _gat_gtag_UA_128505365_1=1; __gads=ID=27a91044883bd19a:T=1718419307:RT=1718421129:S=ALNI_MZgxyu5gHNiECtwJITw6tr31JN7sQ; __gpi=UID=00000e4ce6978a16:T=1718419307:RT=1718421129:S=ALNI_MZiyGenvPhX-lxYTeypF7itzsstsw; __eoi=ID=f1cc3954eea2af58:T=1718419307:RT=1718421129:S=AA-AfjaiFjNdwIufqTs6EBk2-ldi; __gsas=ID=1895aab470831cce:T=1718421133:RT=1718421133:S=ALNI_MbO7eKmjLbHVinYT23tzsQTKsS20Q; _ga_3S1BYFV9M6=GS1.1.1718419271.1.1.1718421128.0.0.0; _ga=GA1.1.1917360856.1718419271; FCNEC=%5B%5B%22AKsRol-bhVSR-EnX-8d0PKV-o_isA4dTo87C22EijAeQ7Y45swOnsc7wb-nkANgL1OX5pzHSeC-lSDOQ3sqi8FZJH3rdKT_Nqk-lFxSMYXvn2f5r-Agq7qncEao7wwk7yPILKqL-g9D07bTWaoc2LOKBnsECS-mBWQ%3D%3D%22%5D%5D",
                "Origin": "https://x2twitter.com",
                "Referer": "https://x2twitter.com/id",
                "User-Agent": "GoogleBot"
            },
            data: form
        });

        const $ = cheerio.load(response.data.data);
        let $$ = $(".tw-right > .dl-action");
        let _$ = $(".tw-middle > .content > .clearfix");

        result.result = {
            title: _$.find("h3").text(),
            duration: _$.find("p").text() + " Seconds",
            thumb: $(".tw-video > .tw-left > .thumbnail > .image-tw.open-popup > img").attr("src"),
            video: {
                fhd: $$.find("p").eq(0).find("a").attr("href"),
                hd: $$.find("p").eq(1).find("a").attr("href"),
                sd: $$.find("p").eq(2).find("a").attr("href"),
                sd2: $$.find("p").eq(3).find("a").attr("href"),
                audio: $$.find("p").eq(4).find("a").attr("data-audiourl"),
                image: $$.find("p").eq(5).find("a").attr("href"),
            }
        };
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            creator: "David XD",
            msg: "Something Error :/"
        };
    }

    console.log(result.result);
    return result;
};

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `Gunakan format: ${usedPrefix}${command} <link>`, m);
    const result = await scrapeTwitter(text);

    if (result.status !== 200) {
        return conn.reply(m.chat, "Terjadi kesalahan saat mengambil data. Silakan coba lagi.", m);
    }

    const { title, duration, thumb, video } = result.result;

    let message = `Title: ${title}\nDuration: ${duration}`;

    // Mengirim gambar dan deskripsi terlebih dahulu
    if (thumb) {
        await conn.sendFile(m.chat, thumb, 'thumbnail.jpg', message, m);
    }

    // Mengirim video
    if (video.fhd) {
        await conn.sendFile(m.chat, video.fhd, 'video.mp4', 'Video FHD', m);
    } else if (video.hd) {
        await conn.sendFile(m.chat, video.hd, 'video.mp4', 'Video HD', m);
    } else if (video.sd) {
        await conn.sendFile(m.chat, video.sd, 'video.mp4', 'Video SD', m);
    } else if (video.sd2) {
        await conn.sendFile(m.chat, video.sd2, 'video.mp4', 'Video SD2', m);
    }

    // Mengirim audio
    if (video.audio) {
        const audioBuffer = await axios.get(video.audio, { responseType: 'arraybuffer' }).then(res => res.data);
        const media = Buffer.from(audioBuffer, 'binary');
        await conn.sendMessage(m.chat, { audio: media, mimetype: "audio/mp4", ptt: false }, { quoted: m });
    }

    if (!video.fhd && !video.hd && !video.sd && !video.sd2 && !video.audio && !thumb) {
        conn.reply(m.chat, "Tidak ada konten yang ditemukan.", m);
    }
};

handler.help = ["twitterdl"];
handler.tags = ["downloader"];
handler.command = ["twitterdl", "twitter", "twiter", "xdl"];

export default handler;
/*
dosa ditanggung sendiri
*/