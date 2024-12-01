import fetch from 'node-fetch'

let handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `[ ❗ ] input failed\n*use*: /${command} https://www.facebook.com/100063980835309/videos/395936539473273/?app=fbl`

const { success, title, links } = await fb(text)

if (success == false) throw eror

try {
m.reply(wait)
conn.sendFile(m.chat, links['Download High Quality'], '', `*${title || ''}*`, m)
} catch (e) {
throw eror
}

}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^(facebook|fb)$/i
handler.limit = handler.register = true

export default handler

async function fb(vid_url) {
    try {
        const data = {
            url: vid_url
        };
        const searchParams = new URLSearchParams();
        searchParams.append('url', data.url);
        const response = await fetch('https://facebook-video-downloader.fly.dev/app/main.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: searchParams.toString(),
        });
        const responseData = await response.json();
        return responseData;
    } catch (e) {
        return null;
    }
}