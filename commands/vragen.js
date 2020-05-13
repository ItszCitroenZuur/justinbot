const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var bericht = arguments.join(' ');
    if (!bericht) return message.channel.send("Geef een vraag op!");

    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Vraag!")
        .setColor("#29ff54")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("**Vraag: **", bericht)
        .addField("------", `Door: ${message.author.username}!`)
        .setFooter("©Copyright claimed by koekiemonsterbot#9276! Doe not disturb!");
    var ideeChannel = message.guild.channels.find('name', '❓vragen-aan-staff');
    if (!ideeChannel) return message.channel.send("Kanaal niet gevonden");

    ideeChannel.send(ideeEmbed);

    message.channel.send(":white_check_mark: Vraag is gesteld!");


}

module.exports.help = {
    name: "vraag"
}