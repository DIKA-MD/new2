let handler = async (m, { conn, args }) => {
let fs = require('fs')
 let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  aki = m.quoted ? [m.quoted.sender] : m.mentionedJid
  let users = aki.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  wayy = 'Cylen-MD Punya Punya Fitur kick loh, Btw sv no owner aku dong hhi. | https://wa.me/6288223674569?text=Nama%20Asal%20Kota%20lu'
  for (let i of users) {
  wayy += ` @${i.split('@')[0]}`
  }
  conn.reply(m.chat, wayy, m, { contextInfo: { mentionedJid: users }})
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupParticipantsUpdate(m.chat, [user], "remove")
}
handler.help = ['kick'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
