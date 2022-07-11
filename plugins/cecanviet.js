let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/vietnam'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢DikaOfficial\nSubscribe : https://youtube.com/channel/UC3HcOB2U-fgsR8onRGXFM3w', wm, 'NEXT', '.cecanvietnam', m)
}

handler.help = ['cecanvietnam']
handler.tags = ['asupan']
handler.command = /^(cecanvietnam)$/i
handler.limit = 3

module.exports = handler
