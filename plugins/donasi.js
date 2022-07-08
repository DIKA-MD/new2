let handler = async m => m.reply(`
            .✵.GROUP ANIME HIJRAH.✵.

            https://chat.whatsapp.com/GSrIiqCby4PAWll9uTz7lo
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
