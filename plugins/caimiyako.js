import fetch from 'node-fetch';

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function miyakoAi(content) {
  return new Promise(async (resolve, reject) => {
    const url = 'https://www.blackbox.ai/api/chat';

    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, Gecko) Chrome/128.0.0.0 Mobile Safari/537.36',
      'Referer': 'https://www.blackbox.ai/agent/MiyakoIstriRapikzP5kWDD5'
    };

    const body = {
      messages: [
        {
          id: generateId(),
          content,
          role: "user"
        }
      ],
      id: generateId(),
      previewToken: null,
      userId: null,
      codeModelMode: true,
      agentMode: {
        mode: true,
        id: "MiyakoIstriRapikzP5kWDD5",
        name: "𝘕𝘪𝘯𝘪𝘱𝘉𝘰𝘵 × 𝘌𝘭𝘢𝘪𝘯𝘢-𝘔𝘋"
      },
      trendingAgentMode: {},
      isMicMode: false,
      maxTokens: 1024,
      isChromeExt: false,
      githubToken: null,
      clickedAnswer2: false,
      clickedAnswer3: false,
      clickedForceWebSearch: false,
      visitFromDelta: false,
      mobileClient: false
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
        compress: true
      });

      let data = await response.text(); 
      data = data.replace(/^\$@\$.+?\$@\$/, '');

      resolve(data);
    } catch (error) {
      reject('Error:', error);
    }
  });
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);
    let response = await miyakoAi(text);
    await conn.sendMessage(m.chat, {
  text: `${response}`,
      contextInfo: {
      externalAdReply: {
        title: 'Miyako - C.ai',
        body: 'BLUE ARCHIVE, C.AI',
        thumbnailUrl: 'https://files.catbox.moe/cjbz6j.jpg',
        sourceUrl: saluran,
        mediaType: 1,
        renderLargerThumbnail: false, 
      }
        }
      }, {
        quoted: m
      });
    }
handler.command = /^(aimiyako|caimiyako)$/i
handler.help = ['aimiyako']
handler.tags = ['character-ai']
handler.premium = false
handler.register = true

export default handler;