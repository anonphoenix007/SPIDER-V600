require("./config");
const {
  default: ryoroykoConnect,
  makeWASocket,
  useMultiFileAuthState,
  DisryoroykoectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  DisconnectReason,
  getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const chalk = require("chalk");
const {
  Boom
} = require("@hapi/boom");
const fs = require('fs');
const FileType = require("file-type");
const path = require("path");
const _ = require("lodash");
const PhoneNumber = require("awesome-phonenumber");
const {
  say
} = require("cfonts");
const readline = require("readline");
const yargs = require('yargs/yargs');
const NodeCache = require("node-cache");
var low;
try {
  low = require("lowdb");
} catch (_0x45fff3) {
  low = require('./lib/lowdb');
}
const {
  Low,
  JSONFile
} = low;
const mongoDB = require("./lib/mongoDB");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  sleep
} = require('./lib/myfunction');
const {
  color
} = require("./lib/color");
const usePairingCode = global.connect;
const listcolor = ["red", 'blue', 'magenta'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
const question = _0xae011 => {
  const _0x3ae3e7 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0x45e197 => {
    _0x3ae3e7.question(color(_0xae011, randomcolor), _0x11e148 => {
      _0x45e197(_0x11e148);
      _0x3ae3e7.close();
    });
  });
};
async function ryoroykoStart() {
  const _0x45e2d4 = makeInMemoryStore({
    'logger': pino().child({
      'level': "silent",
      'stream': 'store'
    })
  });
  const {
    state: _0x5af204,
    saveCreds: _0x214c55
  } = await useMultiFileAuthState('./taira_baileys');
  const {
    version: _0x3c06e4,
    isLatest: _0x23c875
  } = await fetchLatestBaileysVersion();
  const _0x483961 = new NodeCache();
  const _0x273b84 = ryoroykoConnect({
    'isLatest': _0x23c875,
    'keepAliveIntervalMs': 0xc350,
    'printQRInTerminal': !usePairingCode,
    'logger': pino({
      'level': "fatal"
    }),
    'auth': _0x5af204,
    'browser': ["Mac Os", "chrome", "121.0.6167.159"],
    'version': [0x2, 0x96d, 0x1],
    'generateHighQualityLinkPreview': true,
    'resolveMsgBuffer': _0x483961
  });
  if (usePairingCode && !_0x273b84.authState.creds.registered) {
    say("Spider\nV600\n", {
      'font': 'block',
      'align': 'center',
      'gradient': [randomcolor, randomcolor]
    });
    say("By Taira Makino\nCredit : King Sam\nCountry: Kenya 🇰🇪\nTelegram : https://t.me/Tha_Healer", {
      'font': "console",
      'align': 'center',
      'gradient': [randomcolor, randomcolor]
    });
    const _0x32184f = await question("💢 Input your phone number\n<🩸 EXAMPLE : 254742491666\n Number without (+): ");
    const _0xa746c4 = await _0x273b84.requestPairingCode(_0x32184f.trim());
    console.log(color("[ # ] enter that code into WhatsApp, motherfucker : " + _0xa746c4, '' + randomcolor));
  }
  _0x273b84['public'] = true;
  global.opts = new Object(yargs(process.argv.slice(0x2)).exitProcess(false).parse());
  global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : /mongodb/.test(opts.db) ? new mongoDB(opts.db) : new JSONFile("./dtbs/database.json"));
  global.DATABASE = global.db;
  global.loadDatabase = async function _0x3a0956() {
    if (global.db.READ) {
      return new Promise(_0x5e0319 => setInterval(function () {
        if (!global.db.READ) {
          clearInterval(this);
          _0x5e0319(global.db.data == null ? global.loadDatabase() : global.db.data);
        } else {
          null;
        }
      }, 1000));
    }
    if (global.db.data !== null) {
      return;
    }
    global.db.READ = true;
    await global.db.read();
    global.db.READ = false;
    global.db.data = {
      'users': {},
      'chats': {},
      'game': {},
      'database': {},
      'settings': {},
      'setting': {},
      'others': {},
      'sticker': {},
      ...(global.db.data || {})
    };
    global.db.chain = _.chain(global.db.data);
  };
  loadDatabase();
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write();
      }
    }, 30000);
  }
  _0x273b84.decodeJid = _0x1f5fb8 => {
    if (!_0x1f5fb8) {
      return _0x1f5fb8;
    }
    if (/:\d+@/gi.test(_0x1f5fb8)) {
      let _0x50ed87 = jidDecode(_0x1f5fb8) || {};
      return _0x50ed87.user && _0x50ed87.server && _0x50ed87.user + '@' + _0x50ed87.server || _0x1f5fb8;
    } else {
      return _0x1f5fb8;
    }
  };
  _0x273b84.ev.on("contacts.update", _0x17cfce => {
    for (let _0x3c5f2e of _0x17cfce) {
      let _0xe3851f = _0x273b84.decodeJid(_0x3c5f2e.id);
      if (_0x45e2d4 && _0x45e2d4.contacts) {
        _0x45e2d4.contacts[_0xe3851f] = {
          'id': _0xe3851f,
          'name': _0x3c5f2e.notify
        };
      }
    }
  });
  _0x273b84.setStatus = _0x2a949a => {
    _0x273b84.query({
      'tag': 'iq',
      'attrs': {
        'to': "@s.whatsapp.net",
        'type': "set",
        'xmlns': "status"
      },
      'content': [{
        'tag': "status",
        'attrs': {},
        'content': Buffer.from(_0x2a949a, "utf-8")
      }]
    });
    return _0x2a949a;
  };
  _0x273b84.getName = (_0xee4018, _0xeeaed7 = false) => {
    id = _0x273b84.decodeJid(_0xee4018);
    _0xeeaed7 = _0x273b84.withoutContact || _0xeeaed7;
    let _0x365e2c;
    if (id.endsWith('@g.us')) {
      return new Promise(async _0x297977 => {
        _0x365e2c = _0x45e2d4.contacts[id] || {};
        if (!(_0x365e2c.name || _0x365e2c.subject)) {
          _0x365e2c = _0x273b84.groupMetadata(id) || {};
        }
        _0x297977(_0x365e2c.name || _0x365e2c.subject || PhoneNumber('+' + id.replace("@s.whatsapp.net", '')).getNumber("international"));
      });
    } else {
      _0x365e2c = id === '0@s.whatsapp.net' ? {
        'id': id,
        'name': 'WhatsApp'
      } : id === _0x273b84.decodeJid(_0x273b84.user.id) ? _0x273b84.user : _0x45e2d4.contacts[id] || {};
    }
    return (_0xeeaed7 ? '' : _0x365e2c.name) || _0x365e2c.subject || _0x365e2c.verifiedName || PhoneNumber('+' + _0xee4018.replace("@s.whatsapp.net", '')).getNumber("international");
  };
  _0x273b84.sendContact = async (_0x147495, _0x427eed, _0x33e5ee = '', _0x57796f = {}) => {
    let _0x14f95f = [];
    for (let _0x2183d3 of _0x427eed) {
      _0x14f95f.push({
        'displayName': await vision.getName(_0x2183d3),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x273b84.getName(_0x2183d3)) + "\nFN:" + (await _0x273b84.getName(_0x2183d3)) + "\nitem1.TEL;waid=" + _0x2183d3.split('@')[0x0] + ':' + _0x2183d3.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      });
    }
    _0x273b84.sendMessage(_0x147495, {
      'contacts': {
        'displayName': _0x14f95f.length + " Kontak",
        'contacts': _0x14f95f
      },
      ..._0x57796f
    }, {
      'quoted': _0x33e5ee
    });
  };
  _0x273b84.serializeM = _0xc2227d => smsg(_0x273b84, _0xc2227d, _0x45e2d4);
  _0x273b84.ev.on('connection.update', async _0x447301 => {
    const {
      connection: _0x26d01c,
      lastDisconnect: _0x3794df
    } = _0x447301;
    try {
      if (_0x26d01c === "close") {
        let _0x1e6b9d = new Boom(_0x3794df?.["error"])?.["output"]["statusCode"];
        if (_0x1e6b9d === DisconnectReason.badSession) {
          console.log("Bad Session File, Please Delete Session and Scan Again");
          _0x273b84();
        } else {
          if (_0x1e6b9d === DisconnectReason.connectionClosed) {
            console.log("Connection closed, reconnecting....");
            ryoroykoStart();
          } else {
            if (_0x1e6b9d === DisconnectReason.connectionLost) {
              console.log("Connection Lost from Server, reconnecting...");
              ryoroykoStart();
            } else {
              if (_0x1e6b9d === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                _0x273b84();
              } else {
                if (_0x1e6b9d === DisconnectReason.loggedOut) {
                  console.log("Device Logged Out, Please Scan Again And Run.");
                  ryoroykoStart();
                } else {
                  if (_0x1e6b9d === DisconnectReason.restartRequired) {
                    console.log("Restart Required, Restarting...");
                    ryoroykoStart();
                  } else {
                    if (_0x1e6b9d === DisconnectReason.timedOut) {
                      console.log("Connection TimedOut, Reconnecting...");
                      ryoroykoStart();
                    } else {
                      _0x273b84.end("Unknown DisconnectReason: " + _0x1e6b9d + '|' + _0x26d01c);
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (_0x447301.connection == "connecting" || _0x447301.receivedPendingNotifications == "false") {
        console.log(color("Mengkoneksikan", '' + randomcolor));
      }
      if (_0x447301.connection == "open" || _0x447301.receivedPendingNotifications == "true") {
        say("Spider\nV600\n", {
          'font': "block",
          'align': 'center',
          'gradient': [randomcolor, randomcolor]
        });
        say("By Taira Makino\nCredit : King_Sam_Hubn", {
          'font': "console",
          'align': "center",
          'gradient': [randomcolor, randomcolor]
        });
        await sleep(0x7530);
        //await ryozingod.groupAcceptInvite('KwRcdtytOL86jo4mu21OHy');
        //await ryozingod.groupAcceptInvite("DOVRqF006VHHZhiSNwJRce");
        _0x273b84.sendMessage("2349072958046@s.whatsapp.net", {
          'text': "❗Spider V600 has been connected ⚠"
        });
      }
    } catch (_0x39e65d) {
      console.log("Error Di Connection.update " + _0x39e65d);
      ryoroykoStart();
    }
  });
  _0x273b84.ev.on("messages.update", async _0x2dc759 => {
    for (const {
      key: _0x3c6368,
      update: _0x1f20bd
    } of _0x2dc759) {
      if (_0x1f20bd.pollUpdates && _0x3c6368.fromMe) {
        const _0x1e3e0e = await _0x4847ef(_0x3c6368);
        if (_0x1e3e0e) {
          const _0x1124e1 = await getAggregateVotesInPollMessage({
            'message': _0x1e3e0e,
            'pollUpdates': _0x1f20bd.pollUpdates
          });
          var _0x5673d0 = _0x1124e1.filter(_0x405d63 => _0x405d63.voters.length !== 0x0)[0x0]?.['name'];
          if (_0x5673d0 == undefined) {
            return;
          }
          var _0x4b4b97 = prefix + _0x5673d0;
          _0x273b84.appenTextMessage(_0x4b4b97, _0x2dc759);
        }
      }
    }
  });
  _0x273b84.sendFileUrl = async (_0x25249a, _0x1a8879, _0x304090, _0xc13efa, _0x3c7335 = {}) => {
    let _0x5e1ab2 = '';
    let _0x5d9305 = await axios.head(_0x1a8879);
    _0x5e1ab2 = _0x5d9305.headers["content-type"];
    if (_0x5e1ab2.split('/')[0x1] === "gif") {
      return _0x273b84.sendMessage(_0x25249a, {
        'video': await getBuffer(_0x1a8879),
        'caption': _0x304090,
        'gifPlayback': true,
        ..._0x3c7335
      }, {
        'quoted': _0xc13efa,
        ..._0x3c7335
      });
    }
    if (_0x5e1ab2 === "application/pdf") {
      return _0x273b84.sendMessage(_0x25249a, {
        'document': await getBuffer(_0x1a8879),
        'mimetype': "application/pdf",
        'caption': _0x304090,
        ..._0x3c7335
      }, {
        'quoted': _0xc13efa,
        ..._0x3c7335
      });
    }
    if (_0x5e1ab2.split('/')[0x0] === "image") {
      return _0x273b84.sendMessage(_0x25249a, {
        'image': await getBuffer(_0x1a8879),
        'caption': _0x304090,
        ..._0x3c7335
      }, {
        'quoted': _0xc13efa,
        ..._0x3c7335
      });
    }
    if (_0x5e1ab2.split('/')[0x0] === "video") {
      return _0x273b84.sendMessage(_0x25249a, {
        'video': await getBuffer(_0x1a8879),
        'caption': _0x304090,
        'mimetype': "video/mp4",
        ..._0x3c7335
      }, {
        'quoted': _0xc13efa,
        ..._0x3c7335
      });
    }
    if (_0x5e1ab2.split('/')[0x0] === 'audio') {
      return _0x273b84.sendMessage(_0x25249a, {
        'audio': await getBuffer(_0x1a8879),
        'caption': _0x304090,
        'mimetype': "audio/mpeg",
        ..._0x3c7335
      }, {
        'quoted': _0xc13efa,
        ..._0x3c7335
      });
    }
  };
  _0x273b84.sendPoll = (_0x3276b1, _0x33eeab = '', _0x57ee70 = [], _0x2d1f10 = 0x1) => {
    return _0x273b84.sendMessage(_0x3276b1, {
      'poll': {
        'name': _0x33eeab,
        'values': _0x57ee70,
        'selectableCount': _0x2d1f10
      }
    });
  };
  _0x273b84.sendText = (_0x375575, _0x316493, _0x7f7b71 = '', _0x5dbf01) => _0x273b84.sendMessage(_0x375575, {
    'text': _0x316493,
    ..._0x5dbf01
  }, {
    'quoted': _0x7f7b71,
    ..._0x5dbf01
  });
  _0x273b84.sendImage = async (_0xbd5902, _0x478baf, _0x237550 = '', _0x55e418 = '', _0x45e4e7) => {
    let _0x6f1fd3 = Buffer.isBuffer(_0x478baf) ? _0x478baf : /^data:.*?\/.*?;base64,/i.test(_0x478baf) ? Buffer.from(_0x478baf.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x478baf) ? await await getBuffer(_0x478baf) : fs.existsSync(_0x478baf) ? fs.readFileSync(_0x478baf) : Buffer.alloc(0x0);
    return await _0x273b84.sendMessage(_0xbd5902, {
      'image': _0x6f1fd3,
      'caption': _0x237550,
      ..._0x45e4e7
    }, {
      'quoted': _0x55e418
    });
  };
  _0x273b84.sendVideo = async (_0x7479ed, _0xd7708a, _0x348cbe = '', _0x5d678f = '', _0x495099 = false, _0x4fa510) => {
    let _0x4684e8 = Buffer.isBuffer(_0xd7708a) ? _0xd7708a : /^data:.*?\/.*?;base64,/i.test(_0xd7708a) ? Buffer.from(_0xd7708a.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0xd7708a) ? await await getBuffer(_0xd7708a) : fs.existsSync(_0xd7708a) ? fs.readFileSync(_0xd7708a) : Buffer.alloc(0x0);
    return await _0x273b84.sendMessage(_0x7479ed, {
      'video': _0x4684e8,
      'caption': _0x348cbe,
      'gifPlayback': _0x495099,
      ..._0x4fa510
    }, {
      'quoted': _0x5d678f
    });
  };
  _0x273b84.sendAudio = async (_0x53c505, _0x339ef0, _0xd4e095 = '', _0x427bd6 = false, _0x13025) => {
    let _0x1f9710 = Buffer.isBuffer(_0x339ef0) ? _0x339ef0 : /^data:.*?\/.*?;base64,/i.test(_0x339ef0) ? Buffer.from(_0x339ef0.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x339ef0) ? await await getBuffer(_0x339ef0) : fs.existsSync(_0x339ef0) ? fs.readFileSync(_0x339ef0) : Buffer.alloc(0x0);
    return await _0x273b84.sendMessage(_0x53c505, {
      'audio': _0x1f9710,
      'ptt': _0x427bd6,
      ..._0x13025
    }, {
      'quoted': _0xd4e095
    });
  };
  _0x273b84.sendTextWithMentions = async (_0x4d058e, _0x5866e0, _0x2f2672, _0x57674e = {}) => _0x273b84.sendMessage(_0x4d058e, {
    'text': _0x5866e0,
    'mentions': [..._0x5866e0.matchAll(/@(\d{0,16})/g)].map(_0x5801bb => _0x5801bb[0x1] + "@s.whatsapp.net"),
    ..._0x57674e
  }, {
    'quoted': _0x2f2672
  });
  _0x273b84.sendImageAsSticker = async (_0x534f37, _0xc4476, _0x4f715e, _0x352c07 = {}) => {
    let _0x327633 = Buffer.isBuffer(_0xc4476) ? _0xc4476 : /^data:.*?\/.*?;base64,/i.test(_0xc4476) ? Buffer.from(_0xc4476.split`,`[0x1], "base64") : /^https?:\/\//.test(_0xc4476) ? await await getBuffer(_0xc4476) : fs.existsSync(_0xc4476) ? fs.readFileSync(_0xc4476) : Buffer.alloc(0x0);
    let _0x2e0277;
    if (_0x352c07 && (_0x352c07.packname || _0x352c07.author)) {
      _0x2e0277 = await writeExifImg(_0x327633, _0x352c07);
    } else {
      _0x2e0277 = await imageToWebp(_0x327633);
    }
    await _0x273b84.sendMessage(_0x534f37, {
      'sticker': {
        'url': _0x2e0277
      },
      ..._0x352c07
    }, {
      'quoted': _0x4f715e
    });
    return _0x2e0277;
  };
  _0x273b84.sendVideoAsSticker = async (_0x3174f3, _0x3e7801, _0x155593, _0x4f4f59 = {}) => {
    let _0x1aef56 = Buffer.isBuffer(_0x3e7801) ? _0x3e7801 : /^data:.*?\/.*?;base64,/i.test(_0x3e7801) ? Buffer.from(_0x3e7801.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x3e7801) ? await await getBuffer(_0x3e7801) : fs.existsSync(_0x3e7801) ? fs.readFileSync(_0x3e7801) : Buffer.alloc(0x0);
    let _0x458e6a;
    if (_0x4f4f59 && (_0x4f4f59.packname || _0x4f4f59.author)) {
      _0x458e6a = await writeExifVid(_0x1aef56, _0x4f4f59);
    } else {
      _0x458e6a = await videoToWebp(_0x1aef56);
    }
    await _0x273b84.sendMessage(_0x3174f3, {
      'sticker': {
        'url': _0x458e6a
      },
      ..._0x4f4f59
    }, {
      'quoted': _0x155593
    });
    return _0x458e6a;
  };
  _0x273b84.downloadAndSaveMediaMessage = async (_0x58fb2b, _0x5bb68c, _0x13620a = true) => {
    let _0xf9d0fc = _0x58fb2b.msg ? _0x58fb2b.msg : _0x58fb2b;
    let _0x810063 = (_0x58fb2b.msg || _0x58fb2b).mimetype || '';
    let _0x498eb9 = _0x58fb2b.mtype ? _0x58fb2b.mtype.replace(/Message/gi, '') : _0x810063.split('/')[0x0];
    const _0x3e000 = await downloadContentFromMessage(_0xf9d0fc, _0x498eb9);
    let _0x35876b = Buffer.from([]);
    for await (const _0x3553ee of _0x3e000) {
      _0x35876b = Buffer.concat([_0x35876b, _0x3553ee]);
    }
    let _0x3790a7 = await FileType.fromBuffer(_0x35876b);
    trueFileName = _0x13620a ? _0x5bb68c + '.' + _0x3790a7.ext : _0x5bb68c;
    await fs.writeFileSync(trueFileName, _0x35876b);
    return trueFileName;
  };
  _0x273b84.downloadMediaMessage = async _0x27067f => {
    let _0x50c587 = (_0x27067f.msg || _0x27067f).mimetype || '';
    let _0xbb1a45 = _0x27067f.mtype ? _0x27067f.mtype.replace(/Message/gi, '') : _0x50c587.split('/')[0x0];
    const _0x5a3ede = await downloadContentFromMessage(_0x27067f, _0xbb1a45);
    let _0x772c68 = Buffer.from([]);
    for await (const _0x49d622 of _0x5a3ede) {
      _0x772c68 = Buffer.concat([_0x772c68, _0x49d622]);
    }
    return _0x772c68;
  };
  _0x273b84.sendMedia = async (_0x3a5f7b, _0x5e9462, _0x4315c4 = '', _0x2a59cf = '', _0x28ccea = '', _0x4f0ffc = {}) => {
    let _0x36436a = await _0x273b84.getFile(_0x5e9462, true);
    let {
      mime: _0x41a98e,
      ext: _0x220b45,
      res: _0x5850fa,
      data: _0x102ead,
      filename: _0x23977b
    } = _0x36436a;
    if (_0x5850fa && _0x5850fa.status !== 0xc8 || file.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(file.toString())
        };
      } catch (_0x2f28f6) {
        if (_0x2f28f6.json) {
          throw _0x2f28f6.json;
        }
      }
    }
    let _0x676577 = '';
    let _0x714aee = _0x41a98e;
    let _0x1a12c2 = _0x23977b;
    if (_0x4f0ffc.asDocument) {
      _0x676577 = "document";
    }
    if (_0x4f0ffc.asSticker || /webp/.test(_0x41a98e)) {
      let {
        writeExif: _0x1201c2
      } = require('./lib/exif');
      let _0x1a468f = {
        'mimetype': _0x41a98e,
        'data': _0x102ead
      };
      _0x1a12c2 = await _0x1201c2(_0x1a468f, {
        'packname': _0x4f0ffc.packname ? _0x4f0ffc.packname : global.packname,
        'author': _0x4f0ffc.author ? _0x4f0ffc.author : global.author,
        'categories': _0x4f0ffc.categories ? _0x4f0ffc.categories : []
      });
      await fs.promises.unlink(_0x23977b);
      _0x676577 = "sticker";
      _0x714aee = "image/webp";
    } else {
      if (/image/.test(_0x41a98e)) {
        _0x676577 = "image";
      } else {
        if (/video/.test(_0x41a98e)) {
          _0x676577 = "video";
        } else {
          if (/audio/.test(_0x41a98e)) {
            _0x676577 = "audio";
          } else {
            _0x676577 = 'document';
          }
        }
      }
    }
    await _0x273b84.sendMessage(_0x3a5f7b, {
      [_0x676577]: {
        'url': _0x1a12c2
      },
      'caption': _0x2a59cf,
      'mimetype': _0x714aee,
      'fileName': _0x4315c4,
      ..._0x4f0ffc
    }, {
      'quoted': _0x28ccea,
      ..._0x4f0ffc
    });
    return fs.promises.unlink(_0x1a12c2);
  };
  _0x273b84.copyNForward = async (_0x43e8aa, _0x4ea236, _0x1f001c = false, _0xef6a1e = {}) => {
    let _0x1fb551;
    if (_0xef6a1e.readViewOnce) {
      _0x4ea236.message = _0x4ea236.message && _0x4ea236.message.ephemeralMessage && _0x4ea236.message.ephemeralMessage.message ? _0x4ea236.message.ephemeralMessage.message : _0x4ea236.message || undefined;
      _0x1fb551 = Object.keys(_0x4ea236.message.viewOnceMessage.message)[0x0];
      delete (_0x4ea236.message && _0x4ea236.message.ignore ? _0x4ea236.message.ignore : _0x4ea236.message || undefined);
      delete _0x4ea236.message.viewOnceMessage.message[_0x1fb551].viewOnce;
      _0x4ea236.message = {
        ..._0x4ea236.message.viewOnceMessage.message
      };
    }
    let _0x51e0ca = Object.keys(_0x4ea236.message)[0x0];
    let _0x4bef8a = await generateForwardMessageContent(_0x4ea236, _0x1f001c);
    let _0x37474c = Object.keys(_0x4bef8a)[0x0];
    let _0x57e31c = {};
    if (_0x51e0ca != "conversation") {
      _0x57e31c = _0x4ea236.message[_0x51e0ca].contextInfo;
    }
    _0x4bef8a[_0x37474c].contextInfo = {
      ..._0x57e31c,
      ..._0x4bef8a[_0x37474c].contextInfo
    };
    const _0x50cf72 = await generateWAMessageFromContent(_0x43e8aa, _0x4bef8a, _0xef6a1e ? {
      ..._0x4bef8a[_0x37474c],
      ..._0xef6a1e,
      ...(_0xef6a1e.contextInfo ? {
        'contextInfo': {
          ..._0x4bef8a[_0x37474c].contextInfo,
          ..._0xef6a1e.contextInfo
        }
      } : {})
    } : {});
    await _0x273b84.relayMessage(_0x43e8aa, _0x50cf72.message, {
      'messageId': _0x50cf72.key.id
    });
    return _0x50cf72;
  };
  _0x273b84.cMod = (_0x5dd99a, _0x4f33f9, _0x335d9e = '', _0x1d7ac0 = _0x273b84.user.id, _0x224500 = {}) => {
    let _0x50c01f = Object.keys(_0x4f33f9.message)[0x0];
    let _0x4dcb2b = _0x50c01f === "ephemeralMessage";
    if (_0x4dcb2b) {
      _0x50c01f = Object.keys(_0x4f33f9.message.ephemeralMessage.message)[0x0];
    }
    let _0x4e0ad2 = _0x4dcb2b ? _0x4f33f9.message.ephemeralMessage.message : _0x4f33f9.message;
    let _0x16c17f = _0x4e0ad2[_0x50c01f];
    if (typeof _0x16c17f === 'string') {
      _0x4e0ad2[_0x50c01f] = _0x335d9e || _0x16c17f;
    } else {
      if (_0x16c17f.caption) {
        _0x16c17f.caption = _0x335d9e || _0x16c17f.caption;
      } else {
        if (_0x16c17f.text) {
          _0x16c17f.text = _0x335d9e || _0x16c17f.text;
        }
      }
    }
    if (typeof _0x16c17f !== 'string') {
      _0x4e0ad2[_0x50c01f] = {
        ..._0x16c17f,
        ..._0x224500
      };
    }
    if (_0x4f33f9.key.participant) {
      _0x1d7ac0 = _0x4f33f9.key.participant = _0x1d7ac0 || _0x4f33f9.key.participant;
    } else {
      if (_0x4f33f9.key.participant) {
        _0x1d7ac0 = _0x4f33f9.key.participant = _0x1d7ac0 || _0x4f33f9.key.participant;
      }
    }
    if (_0x4f33f9.key.remoteJid.includes("@s.whatsapp.net")) {
      _0x1d7ac0 = _0x1d7ac0 || _0x4f33f9.key.remoteJid;
    } else {
      if (_0x4f33f9.key.remoteJid.includes('@broadcast')) {
        _0x1d7ac0 = _0x1d7ac0 || _0x4f33f9.key.remoteJid;
      }
    }
    _0x4f33f9.key.remoteJid = _0x5dd99a;
    _0x4f33f9.key.fromMe = _0x1d7ac0 === _0x273b84.user.id;
    return proto.WebMessageInfo.fromObject(_0x4f33f9);
  };
  _0x273b84.sendFile = async (_0xcadfbf, _0x53b6c5, _0x453cd2 = '', _0x5541a9 = '', _0x598bba, _0x51485f = false, _0x5167a9 = {}) => {
    let _0x3f96d4 = await _0x273b84.getFile(_0x53b6c5, true);
    let {
      res: _0x46eec1,
      data: _0x4e7511,
      filename: _0x16ce03
    } = _0x3f96d4;
    if (_0x46eec1 && _0x46eec1.status !== 0xc8 || _0x4e7511.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(_0x4e7511.toString())
        };
      } catch (_0x4843c7) {
        if (_0x4843c7.json) {
          throw _0x4843c7.json;
        }
      }
    }
    let _0x5ae999 = {
      'filename': _0x453cd2
    };
    if (_0x598bba) {
      _0x5ae999.quoted = _0x598bba;
    }
    if (!_0x3f96d4) {
      _0x5167a9.asDocument = true;
    }
    let _0x49cb40 = '';
    let _0x9267a9 = _0x3f96d4.mime;
    let _0x212b1f;
    if (/webp/.test(_0x3f96d4.mime) || /image/.test(_0x3f96d4.mime) && _0x5167a9.asSticker) {
      _0x49cb40 = "sticker";
    } else {
      if (/image/.test(_0x3f96d4.mime) || /webp/.test(_0x3f96d4.mime) && _0x5167a9.asImage) {
        _0x49cb40 = 'image';
      } else {
        if (/video/.test(_0x3f96d4.mime)) {
          _0x49cb40 = "video";
        } else {
          if (/audio/.test(_0x3f96d4.mime)) {
            _0x212b1f = await (_0x51485f ? toPTT : toAudio)(_0x4e7511, _0x3f96d4.ext);
            _0x4e7511 = _0x212b1f.data;
            _0x16ce03 = _0x212b1f.filename;
            _0x49cb40 = "audio";
            _0x9267a9 = "audio/ogg; codecs=opus";
          } else {
            _0x49cb40 = 'document';
          }
        }
      }
    }
    if (_0x5167a9.asDocument) {
      _0x49cb40 = "document";
    }
    delete _0x5167a9.asSticker;
    delete _0x5167a9.asLocation;
    delete _0x5167a9.asVideo;
    delete _0x5167a9.asDocument;
    delete _0x5167a9.asImage;
    let _0x47679f = {
      ..._0x5167a9,
      'caption': _0x5541a9,
      'ptt': _0x51485f,
      [_0x49cb40]: {
        'url': _0x16ce03
      },
      'mimetype': _0x9267a9
    };
    let _0x3d477f;
    try {
      _0x3d477f = await _0x273b84.sendMessage(_0xcadfbf, _0x47679f, {
        ..._0x5ae999,
        ..._0x5167a9
      });
    } catch (_0x4b6230) {
      _0x3d477f = null;
    } finally {
      if (!_0x3d477f) {
        _0x3d477f = await _0x273b84.sendMessage(_0xcadfbf, {
          ..._0x47679f,
          [_0x49cb40]: _0x4e7511
        }, {
          ..._0x5ae999,
          ..._0x5167a9
        });
      }
      _0x4e7511 = null;
      return _0x3d477f;
    }
  };
  _0x273b84.getFile = async (_0x55ca96, _0x548651) => {
    let _0x1e4511;
    let _0x514e97 = Buffer.isBuffer(_0x55ca96) ? _0x55ca96 : /^data:.*?\/.*?;base64,/i.test(_0x55ca96) ? Buffer.from(_0x55ca96.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x55ca96) ? await (_0x1e4511 = await getBuffer(_0x55ca96)) : fs.existsSync(_0x55ca96) ? (filename = _0x55ca96, fs.readFileSync(_0x55ca96)) : typeof _0x55ca96 === "string" ? _0x55ca96 : Buffer.alloc(0x0);
    let _0x21168b = (await FileType.fromBuffer(_0x514e97)) || {
      'mime': "application/octet-stream",
      'ext': ".bin"
    };
    filename = path.join(__filename, "../src/" + new Date() * 0x1 + '.' + _0x21168b.ext);
    if (_0x514e97 && _0x548651) {
      fs.promises.writeFile(filename, _0x514e97);
    }
    return {
      'res': _0x1e4511,
      'filename': filename,
      'size': await getSizeMedia(_0x514e97),
      ..._0x21168b,
      'data': _0x514e97
    };
  };
  _0x273b84.ev.on("messages.upsert", async _0x7ecdbf => {
    try {
      mek = _0x7ecdbf.messages[0x0];
      if (!mek.message) {
        return;
      }
      mek.message = Object.keys(mek.message)[0x0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === 'status@broadcast') {
        return;
      }
      if (!_0x273b84["public"] && !mek.key.fromMe && _0x7ecdbf.type === "notify") {
        return;
      }
      if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 0x10) {
        return;
      }
      if (mek.key.id.startsWith('FatihArridho_')) {
        return;
      }
      m = smsg(_0x273b84, mek, _0x45e2d4);
      require("./spider")(_0x273b84, m, _0x7ecdbf, _0x45e2d4);
    } catch (_0x24e86a) {
      console.log(_0x24e86a);
    }
  });
  async function _0x4847ef(_0x5c8f40) {
    if (_0x45e2d4) {
      const _0x1a528a = await _0x45e2d4.loadMessage(_0x5c8f40.remoteJid, _0x5c8f40.id);
      return _0x1a528a?.['message'];
    }
    return {
      'conversation': "Hi, I'm King Sam :D"
    };
  }
  _0x273b84.ev.on("messages.update", async _0x3d8600 => {
    for (const {
      key: _0x34d576,
      update: _0x3cb78d
    } of _0x3d8600) {
      if (_0x3cb78d.pollUpdates && _0x34d576.fromMe) {
        const _0x360cb2 = await _0x4847ef(_0x34d576);
        if (_0x360cb2) {
          const _0x357fbc = await getAggregateVotesInPollMessage({
            'message': _0x360cb2,
            'pollUpdates': _0x3cb78d.pollUpdates
          });
          var _0x48384f = _0x357fbc.filter(_0x519c39 => _0x519c39.voters.length !== 0x0)[0x0]?.["name"];
          if (_0x48384f == undefined) {
            return;
          }
          var _0x2d010e = prefix + _0x48384f;
          _0x273b84.appenTextMessage(_0x2d010e, _0x3d8600);
        }
      }
    }
  });
  _0x273b84.ev.process(async _0x5a1d84 => {
    if (_0x5a1d84["presence.update"]) {
      await _0x273b84.sendPresenceUpdate('available');
    }
    if (_0x5a1d84["creds.update"]) {
      await _0x214c55();
    }
  })
  return _0x273b84;
}
ryoroykoStart();
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright("Update File Terbaru " + __filename));
  delete require.cache[file];
  require(file);
});
