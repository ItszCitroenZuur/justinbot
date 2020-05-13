const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var idee = arguments.join(' ');
    if (!idee) return message.channel.send("Geef een idee op!");

    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Nieuw idee!")
        .setColor("#29ff54")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("**Idee: **", idee)
        .addField("------", `Idee ingezonden door ${message.author}!`)
        .setFooter("©Copyright claimed by koekiemonsterbot#9276! Doe not disturb!");
    var ideeChannel = message.guild.channels.find('name', 'ideeen');
    if (!ideeChannel) return message.channel.send("Kanaal niet gevonden");

    message.channel.send(":white_check_mark: Idee opgenomen!");

    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });

  



}

module.exports.help = {
    name: "idee"
}