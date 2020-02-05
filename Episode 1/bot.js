const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Odpalono aplikacje ${client.user.tag}!`)
})

let statusy = ['To jest chyba najlepszy polski Bot', 'Alpha 1.0.1', 'By kqba.xcf', 'Ping: 13ms', 'Pozdro dla ciebie, jeżeli to czytasz', 'Bot jest w fazie testów', 'Nasz prefix to "!"', 'Propozycje do Bota wysyłaj na serwerze developerskim', 'Wpisz !ekipa i ukażą ci sie najlepsi specjaliści', 'tofik dużo pomagał', 'Używamy Visual Studio Code', 'Jeśli przeczytałe wszystkie, to chyba nie wiem', 'Dużo osób pomagało mi w kodzie', 'Ten Bot nie zaraża Koronawirusem', 'Szukamy Opiekuna Bota'];

    setInterval(function() {
        let status = statusy[Math.floor(Math.random() * statusy.length)];  
        client.user.setPresence({
            game: {
                name: status
            },
            status: 'dnd'
        });
    }, 10000)

client.on('message', msg => {
  if (msg.content === '!powitanie') {
    msg.reply('siema!')
  }
})

client.on('message', msg => {
  if (msg.content === '!ekipa') {
    msg.channel.send(new Discord.RichEmbed() .setTitle("Ekipa Bota") .setDescription("Programista głowny: kqba.xcf, tofik") .setColor("RANDOM")) 
  }
})

client.on('message', msg => {
  if (msg.content === '!bot') {
    msg.channel.send(new Discord.RichEmbed() .setTitle("Spis komend Bota") .setDescription("ekipa, powitanie, pozegnanie, kqba, tofik, bot | Prefix: !") .setColor("RANDOM"))
  }
})

client.on('message', msg => {
  if (msg.content === '!pozegnanie') {
    msg.reply('Żegnaj mordeczko!')
  }
})

client.on('message', msg => {
  if (msg.content === '!tofik') {
    msg.channel.send(new Discord.RichEmbed() .setTitle("Developer") .setDescription("tofik, to jeden z pomocnikow bota, pomaga duzo i jest spoko mordą") .setColor("RANDOM"))
  }
})

client.on('message', msg => {
  if (msg.content === '!kqba') {
    msg.channel.send(new Discord.RichEmbed() .setTitle("Programista Główny") .setDescription("kqba.xcf to profesjonlny programista discord, ktory siedzi w tym od paru miesiecy, a na discordzie okolo trzy lata") .setColor("RANDOM"))
  }
})

client.login('NjM5NDc0NzE1NzE4ODQ0NDE3.XiC9ww.f0TDKM1E3MXnDySromAKNGp1fGQ')
