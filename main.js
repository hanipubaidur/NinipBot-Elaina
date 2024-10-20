process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import './config.js';
import _0x345a18, { join } from 'path';
import { platform } from 'process';
import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';
global.__filename = function filename(_0x116537 = import.meta.url, _0x524996 = platform !== "win32") {
  return _0x524996 ? /file:\/\/\//.test(_0x116537) ? fileURLToPath(_0x116537) : _0x116537 : pathToFileURL(_0x116537).toString();
};
global.__dirname = function dirname(_0x3bcb85) {
  return _0x345a18.dirname(global.__filename(_0x3bcb85, true));
};
global.__require = function require(_0x35ff53 = import.meta.url) {
  return createRequire(_0x35ff53);
};
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x40da3c from 'yargs';
import { spawn } from 'child_process';
import _0x38472e from 'lodash';
import _0x4ae7f7 from 'syntax-error';
import _0x5e50c1 from 'chalk';
import { tmpdir } from 'os';
import _0x3899e7 from 'readline';
import { format } from 'util';
import _0x3ef4d2 from 'pino';
import _0x11629a from 'ws';
import { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, makeCacheableSignalKeyStore, PHONENUMBER_MCC } from '@adiwajshing/baileys';
import { Low, JSONFile } from 'lowdb';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { mongoDB, mongoDBV2 } from './lib/zmemek.js';
const {
  CONNECTING
} = _0x11629a;
const {
  chain
} = _0x38472e;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0xbb8;
protoType();
serialize();
global.API = (_0x27d876, _0x5eb440 = '/', _0x4deacb = {}, _0x2ab2fa) => (_0x27d876 in global.APIs ? global.APIs[_0x27d876] : _0x27d876) + _0x5eb440 + (_0x4deacb || _0x2ab2fa ? '?' + new URLSearchParams(Object.entries({
  ..._0x4deacb,
  ...(_0x2ab2fa ? {
    [_0x2ab2fa]: global.APIKeys[_0x27d876 in global.APIs ? global.APIs[_0x27d876] : _0x27d876]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x40da3c(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts.prefix || "‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? opts.mongodbv2 ? new mongoDBV2(opts.db) : new mongoDB(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + "database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (db.READ) {
    return new Promise(_0x1b65d7 => setInterval(async function () {
      if (!db.READ) {
        clearInterval(this);
        _0x1b65d7(db.data == null ? global.loadDatabase() : db.data);
      }
    }, 0x3e8));
  }
  if (db.data !== null) {
    return;
  }
  db.READ = true;
  await db.read()["catch"](console.error);
  db.READ = null;
  db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(db.data || {})
  };
  global.db.chain = chain(db.data);
};
loadDatabase();
const useStore = !process.argv.includes("--use-store");
const usePairingCode = !process.argv.includes("--use-pairing-code");
const useMobile = process.argv.includes("--mobile");
var question = function (_0x228e12) {
  return new Promise(function (_0x369b9d) {
    rl.question(_0x228e12, _0x369b9d);
  });
};
const rl = _0x3899e7.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const store = useStore ? makeInMemoryStore({
  'level': 'silent'
}) : undefined;
store?.["readFromFile"]("./elaina_store.json");
setInterval(() => {
  store?.["writeToFile"]("./elaina_store.json");
}, 0x2710);
const {
  version,
  isLatest
} = await fetchLatestBaileysVersion();
const {
  state,
  saveCreds
} = await useMultiFileAuthState("./sessions");
const connectionOptions = {
  'version': version,
  'logger': _0x3ef4d2({
    'level': 'silent'
  }),
  'printQRInTerminal': !usePairingCode,
  'browser': ["Mac OS", "Safari", "10.15.7"],
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0x3ef4d2().child({
      'level': "silent",
      'stream': "store"
    }))
  },
  'getMessage': async _0x1e3568 => {
    const _0x12b7db = await store.loadMessage(_0x1e3568.remoteJid, _0x1e3568.id);
    return _0x12b7db?.["message"] || undefined;
  },
  'generateHighQualityLinkPreview': true,
  'patchMessageBeforeSending': _0x474af6 => {
    const _0x482424 = !!(_0x474af6.buttonsMessage || _0x474af6.templateMessage || _0x474af6.listMessage);
    if (_0x482424) {
      _0x474af6 = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadataVersion': 0x2,
              'deviceListMetadata': {}
            },
            ..._0x474af6
          }
        }
      };
    }
    return _0x474af6;
  }
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
if (usePairingCode && !conn.authState.creds.registered) {
  if (useMobile) {
    throw new Error("Cannot use pairing code with mobile api");
  }
  let RapikzBjir = await question(_0x5e50c1.blueBright("ENTER PASSWORD (clue : bio instagram @nip.niff): \n"));
  if (RapikzBjir.trim().toLowerCase() !== "Ninipbot-Elaina") {
    console.log(_0x5e50c1.red("Oops, the password you entered is incorrect. Please try again."));
    process.exit();
  }
  let phoneNumber = '';
  do {
    phoneNumber = await question(_0x5e50c1.blueBright("The password is correct. Now Input a Valid number start with region code. Example : 62xxx:\n"));
  } while (!Object.keys(PHONENUMBER_MCC).some(_0x6c9cc => phoneNumber.startsWith(_0x6c9cc)));
  rl.close();
  phoneNumber = phoneNumber.replace(/\D/g, '');
  console.log(_0x5e50c1.bgWhite(_0x5e50c1.blue("Generating code...")));
  setTimeout(async () => {
    let _0x120e6a = await conn.requestPairingCode(phoneNumber);
    _0x120e6a = _0x120e6a?.["match"](/.{1,4}/g)?.["join"]('-') || _0x120e6a;
    console.log(_0x5e50c1.black(_0x5e50c1.bgGreen("Your Pairing Code : ")), _0x5e50c1.black(_0x5e50c1.white(_0x120e6a)));
  }, 0xbb8);
}
if (!opts.test) {
  (await import("./server.js"))["default"](PORT);
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write()["catch"](console.error);
    }
    clearTmp();
  }, 0xea60);
}
function clearTmp() {
  const _0x1055a7 = [tmpdir(), join(__dirname, "./tmp")];
  const _0x3e733d = [];
  _0x1055a7.forEach(_0x82b7ad => readdirSync(_0x82b7ad).forEach(_0x518098 => _0x3e733d.push(join(_0x82b7ad, _0x518098))));
  return _0x3e733d.map(_0x3cab6e => {
    const _0x2f3370 = statSync(_0x3cab6e);
    if (_0x2f3370.isFile() && Date.now() - _0x2f3370.mtimeMs >= 0x2bf20) {
      return unlinkSync(_0x3cab6e);
    }
    return false;
  });
}
function clearSessions(_0x46cda0 = "sessions") {
  let _0x52335c = [];
  readdirSync(_0x46cda0).forEach(_0x39d831 => _0x52335c.push(join(_0x46cda0, _0x39d831)));
  return _0x52335c.map(_0x10a973 => {
    let _0x31428a = statSync(_0x10a973);
    if (_0x31428a.isFile() && Date.now() - _0x31428a.mtimeMs >= 0x6ddd00) {
      console.log("Deleted sessions", _0x10a973);
      return unlinkSync(_0x10a973);
    }
    return false;
  });
}
async function connectionUpdate(_0x5ee9af) {
  const {
    receivedPendingNotifications: _0x2848dc,
    connection: _0x5abffe,
    lastDisconnect: _0x408f0b,
    isOnline: _0x3a9c4e,
    isNewLogin: _0x3c1766
  } = _0x5ee9af;
  global.stopped = _0x5abffe;
  if (_0x3c1766) {
    conn.isInit = true;
  }
  if (_0x5abffe == "connecting") {
    console.log(_0x5e50c1.redBright("⚡ Mengaktifkan Bot, Mohon tunggu sebentar..."));
  } else if (_0x5abffe == "open") {
    console.log(_0x5e50c1.green("✅ Tersambung"));
  }
  if (_0x3a9c4e == true) {
    console.log(_0x5e50c1.green("Status Aktif"));
  } else if (_0x3a9c4e == false) {
    console.log(_0x5e50c1.red("Status Mati"));
  }
  if (_0x2848dc) {
    console.log(_0x5e50c1.yellow("Menunggu Pesan Baru"));
  }
  if (_0x5abffe == 'open') {
    conn.sendMessage("6282183478561@s.whatsapp.net", {
      'text': "- 𝑩𝑶𝑻 𝑬𝑳𝑨𝑰𝑵𝑨 𝑩𝑼𝑻𝑻𝑶𝑵 𝑽𝟕.𝟐 𝑨𝑲𝑻𝑰𝑭\nFOLLOW INSTAGRAM @nip.niff"
    });
  }
  if (_0x5abffe == "close") {
    console.log(_0x5e50c1.red("⏱️ koneksi terputus & mencoba menyambung ulang..."));
  }
  global.timestamp.connect = new Date();
  if (_0x408f0b && _0x408f0b.error && _0x408f0b.error.output && _0x408f0b.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== CONNECTING) {
    console.log(await global.reloadHandler(true));
  }
  if (global.db.data == null) {
    await global.loadDatabase();
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x5e68f8) {
  try {
    const _0x341ddd = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0x341ddd || {}).length) {
      handler = _0x341ddd;
    }
  } catch (_0x40199b) {
    console.error(_0x40199b);
  }
  if (_0x5e68f8) {
    const _0x5325e1 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x5325e1
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.welcome = "❖━━━━━━[ ᴡᴇʟᴄᴏᴍᴇ ]━━━━━━❖\n\n┏––––––━━━━━━━━•\n│☘︎ @subject\n┣━━━━━━━━┅┅┅\n│( 👋 Hallo @user)\n├[ ɪɴᴛʀᴏ ]—\n│ ɴᴀᴍᴀ: \n│ ᴜᴍᴜʀ: \n│ ɢᴇɴᴅᴇʀ:\n┗––––––━━┅┅┅\n\n––––––┅┅ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ ┅┅––––––\n@desc";
  conn.bye = "❖━━━━━━[ ʟᴇᴀᴠɪɴɢ ]━━━━━━❖\n𝚂𝚊𝚢𝚘𝚗𝚊𝚛𝚊𝚊 @user 👋😃";
  conn.spromote = "@user Sekarang jadi admin!";
  conn.sdemote = "@user Sekarang bukan lagi admin!";
  conn.sDesc = "Deskripsi telah diubah menjadi \n@desc";
  conn.sSubject = "Judul grup telah diubah menjadi \n@subject";
  conn.sIcon = "Icon grup telah diubah!";
  conn.sRevoke = "Link group telah diubah ke \n@revoke";
  conn.sAnnounceOn = "Group telah di tutup!\nsekarang hanya admin yang dapat mengirim pesan.";
  conn.sAnnounceOff = "Group telah di buka!\nsekarang semua peserta dapat mengirim pesan.";
  conn.sRestrictOn = "Edit Info Grup di ubah ke hanya admin!";
  conn.sRestrictOff = "Edit Info Grup di ubah ke semua peserta!";
  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn);
  conn.ev.on('messages.upsert', conn.handler);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on('groups.update', conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0x5d767c => /\.js$/.test(_0x5d767c);
global.plugins = {};
async function filesInit() {
  for (let _0x596f8e of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let _0x2be9c4 = global.__filename(join(pluginFolder, _0x596f8e));
      const _0x454a56 = await import(_0x2be9c4);
      global.plugins[_0x596f8e] = _0x454a56["default"] || _0x454a56;
    } catch (_0x51a5bc) {
      conn.logger.error(_0x51a5bc);
      delete global.plugins[_0x596f8e];
    }
  }
}
filesInit().then(_0x440b23 => console.log(Object.keys(global.plugins)))["catch"](console.error);
global.reload = async (_0x2b1faa, _0x63351b) => {
  if (/\.js$/.test(_0x63351b)) {
    let _0xfc4308 = global.__filename(join(pluginFolder, _0x63351b), true);
    if (_0x63351b in global.plugins) {
      if (existsSync(_0xfc4308)) {
        conn.logger.info("re - require plugin '" + _0x63351b + "'");
      } else {
        conn.logger.warn("deleted plugin '" + _0x63351b + "'");
        return delete global.plugins[_0x63351b];
      }
    } else {
      conn.logger.info("requiring new plugin '" + _0x63351b + "'");
    }
    let _0x2bfbc9 = _0x4ae7f7(readFileSync(_0xfc4308), _0x63351b, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0x2bfbc9) {
      conn.logger.error("syntax error while loading '" + _0x63351b + "'\n" + format(_0x2bfbc9));
    } else {
      try {
        const _0x4c8f92 = await import(global.__filename(_0xfc4308) + "?update=" + Date.now());
        global.plugins[_0x63351b] = _0x4c8f92["default"] || _0x4c8f92;
      } catch (_0x206dbc) {
        conn.logger.error("error require plugin '" + _0x63351b + "\n" + format(_0x206dbc) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x50d80d], [_0x5f0380]) => _0x50d80d.localeCompare(_0x5f0380)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  let _0x522576 = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", '-loglevel', "error", "-filter_complex", "color", "-frames:v", '1', '-f', "webp", '-']), spawn("convert"), spawn("magick"), spawn('gm'), spawn("find", ["--version"])].map(_0x29b164 => {
    return Promise.race([new Promise(_0x2229a3 => {
      _0x29b164.on("close", _0x496364 => {
        _0x2229a3(_0x496364 !== 0x7f);
      });
    }), new Promise(_0x1b5971 => {
      _0x29b164.on("error", _0x247e0f => _0x1b5971(false));
    })]);
  }));
  let [_0x1192ab, _0x2278b5, _0x9aa4f3, _0x1e2314, _0x5f1086, _0x55f533, _0x866ae7] = _0x522576;
  console.log(_0x522576);
  let _0x57f90f = global.support = {
    'ffmpeg': _0x1192ab,
    'ffprobe': _0x2278b5,
    'ffmpegWebp': _0x9aa4f3,
    'convert': _0x1e2314,
    'magick': _0x5f1086,
    'gm': _0x55f533,
    'find': _0x866ae7
  };
  Object.freeze(global.support);
  if (!_0x57f90f.ffmpeg) {
    conn.logger.warn("Silahkan install ffmpeg terlebih dahulu agar bisa mengirim video");
  }
  if (_0x57f90f.ffmpeg && !_0x57f90f.ffmpegWebp) {
    conn.logger.warn("Sticker Mungkin Tidak Beranimasi tanpa libwebp di ffmpeg (--enable-ibwebp while compiling ffmpeg)");
  }
  if (!_0x57f90f.convert && !_0x57f90f.magick && !_0x57f90f.gm) {
    conn.logger.warn("\nFOLLOW INSTAGRAM @nip.niff");
  }
}
setInterval(async () => {
  if (stopped == "close") {
    return;
  }
  let _0x924333 = process.uptime() * 0x3e8;
  let _0x4007c7 = clockString(_0x924333);
  let _0x1b1749 = "Bot Aktif dalam waktu : " + _0x4007c7 + "\nNOTE: FOLLOW INSTAGRAM @nip.niff";
  await conn.updateProfileStatus(_0x1b1749)["catch"](_0x4a50a7 => _0x4a50a7);
}, 0xea60);
function clockString(_0x41b0e3) {
  let _0x2bb60d = isNaN(_0x41b0e3) ? '--' : Math.floor(_0x41b0e3 / 0x5265c00);
  let _0x4b087a = isNaN(_0x41b0e3) ? '--' : Math.floor(_0x41b0e3 / 0x36ee80) % 0x18;
  let _0x48288b = isNaN(_0x41b0e3) ? '--' : Math.floor(_0x41b0e3 / 0xea60) % 0x3c;
  let _0x1bedf0 = isNaN(_0x41b0e3) ? '--' : Math.floor(_0x41b0e3 / 0x3e8) % 0x3c;
  return [_0x2bb60d, " Hari ", _0x4b087a, " Jam ", _0x48288b, " Menit ", _0x1bedf0, " Seconds "].map(_0x10cf09 => _0x10cf09.toString().padStart(0x2, 0x0)).join('');
}
_quickTest().then(() => conn.logger.info("☑️ Quick Test Done , nama file session ~> creds.json"))["catch"](console.error);