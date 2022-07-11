let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zacros.my.id/asupan/random', 'asupan.mp4', '𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢DikaOfficial\nSubscribe : https://youtube.com/channel/UC3HcOB2U-fgsR8onRGXFM3w', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']

handler.command = /^(asupan)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler
