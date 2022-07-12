let handler = async m => m.reply(`
「 *_I'm alive_* 」

🔭 ```I'm currently working on bot wa```
🌱 ```I'm currently learning about u```
💬 ```Ask me about u```
📫 ```How to reach me:```
                   ⭔ ```WhatsApp```
                         • ```0882 2367 4569```
                   ⭔ ```Instagram```
                         • ```Cigegerotak```
                   ⭔ ```Github```
                         • ```DIKA-MD```
⚡ ```Hoby```:
                   ⭔ ```Football```
                   ⭔ ```Volly```
                   ⭔ ```so progamer```
                   ⭔ ```And others.```
👨‍🎓 ```Gender```: ```Male```


「 *_Rules and faq_* 」

1. Jangan spam bot. 🙅🏻‍♂️
Sanksi: ❎ *WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: ❎ *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANEN BLOCK*

💨 _Bot tidak atau lambat merespon?_
➡️ Mungkin di pengaruhi oleh jaringan, signal, banned oleh WhatsApp dan beberapa alasan. Tetap patuhi rules‼️

💨 _Dimana saya bisa mendapatkan Script dari bot ini ?_
➡️ Script ini masih private dan tidak pernah diperjual belikan.

💨 _Boleh saya menambah ke grup?_
➡️ Untuk memasukan bot kedalam grup bisa chat owner terlebih dahulu

💨 _Prefixnya apa ya?_
➡️ Bot ini tidak menggunakan multi prefix. jadi kamu bisa menggunakan nya dengan prefix " . " dll

💨 _Kak, kok saya chat owner tidak di respon?_
➡️ Owner hanya merespon pertanyaan seputar bot dan kendala eror, tidak untuk kenalan ataupun mengemis Script.

🔰 _Segala kebijakan dan ketentuan Cylen-MD di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu Owner berhak mencabut, memblokir user._
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
