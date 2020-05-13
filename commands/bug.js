const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var idee = arguments.join(' ');
    if (!idee) return message.channel.send("Geef een bug op!");

    var bugEmbed = new discord.RichEmbed()
        .setTitle("Bug gevonden!")
        .setColor("#29ff54")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("**Bug: **", idee)
        .addField("------", `**Bug gevonden door: **${message.author}!`)
        .addField(".", "Heb jij deze bug ook gevonden of gezien? Klik dan op :thumbsup:!")
        .setFooter("©Copyright claimed by koekiemonsterbot#9276! Doe not disturb!");
    var bugChannel = message.guild.channels.find('name', '☢bugs-melden☢');
    if (!bugChannel) return message.channel.send("Kanaal niet gevonden");

    message.channel.send(":white_check_mark: Bug opgenomen!");

    bugChannel.send(bugEmbed).then(embedMessage => {
        embedMessage.react('👍');
    });





}

module.exports.help = {
    name: "bug"
}