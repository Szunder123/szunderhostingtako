const { Client, RichEmbed } = require('discord.js')

module.exports = {
    name: "youtube",
    description: "Podaje informacje na temat kanału na Youtybe",

    run(msg) {
        const { channel } = msg
        const embed = new RichEmbed()
      
        .setTitle("YOUTUBE")
        .setDescription("Baza Danych jest pusta, Mamy informacje tylko o Kanale Szunder.")
        .setColor(0xff0000)
      
          msg.channel.send(embed)
          msg.delete()
    },
}