import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Use ${usedPrefix + command} 12345678`;
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }});

  try {
    let res = await ffstalk(text);
    
    let capt = ` *Basic Info*
Username: ${res.result.name}
Level: ${res.result.level}
Region: ${res.result.region}
Like: ${res.result.like}
Bio: ${res.result.bio}
Title: ${res.result.title}
Exp: ${res.result.exp}
Honor Score: ${res.result.honorscore}

*Activity Info*

Fire Pass : ${res.result.firepass}
Br Rank : ${res.result.brrank}
Cs Point : ${res.result.cspoints}
Created At : ${res.result.createdat}
Last login : ${res.result.lastlogin}

*Guild Info*

Guild Name : ${res.result.guildname}
Guild Id : ${res.result.guildid}
Guild Level : ${res.result.guildlevel}
Member Guild : ${res.result.livemembers}
    `;
    
    conn.reply(m.chat, capt.trim(), m);
  } catch (e) {
    console.error(e);
    conn.reply(m.chat, 'Failed to fetch data', m);
  }
};

handler.help = ['ffstalk'];
handler.tags = ['tools'];
handler.command = /^(ffstalk|stalkff)$/i;
export default handler
// follow https://whatsapp.com/channel/0029VaJYWMb7oQhareT7F40V
async function ffstalk(id) {
  try {
    const response = await axios.get(`https://allstars-apis.vercel.app/freefire?id=${id}`);
    const data = response.data;
    
    const result = {
      status: true,
      result: {
        name: data.BasicInfo.Name,
        level: data.BasicInfo.Level,
        region: data.BasicInfo.Region,
        like: data.BasicInfo.Likes,
        exp: data.BasicInfo.Exp,
        honorscore: data.BasicInfo.HonorScore,
        bio: data.BasicInfo.Bio,
        title: data.BasicInfo.Title,
        firepass: data.ActivityInfo.FirePass,
        brrank: data.ActivityInfo.BRRank,
        cspoints: data.ActivityInfo.CSPoints,
        createdat: data.ActivityInfo.CreatedAt,
        lastlogin: data.ActivityInfo.LastLogin,
        guildname: data.GuildInfo.GuildName,
        guildid: data.GuildInfo.GuildID,
        guildlevel: data.GuildInfo.GuildLevel,
        livemembers: data.GuildInfo.LiveMembers,
      },
    };
    
    return result;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to be caught by the handler
  }
}