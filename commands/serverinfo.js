const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    var serverIcon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setTitle("Server informatie")
        .setColor("#29ff54")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setThumbnail(serverIcon)
        .addField("-----", "**Server naam: **" + message.guild.name)
        .addField("-----", "**Server gemaakt op: ** " + message.guild.createdAt)
        .setFooter("©Copyright claimed by koekiemonsterbot#9276! Doe not disturb!");

    message.channel.send(serverEmbed);

}

module.exports.help = {

    name: "serverinfo"

}