const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var serverIcon = message.guild.iconURL;
    var ledenEmbed = new discord.RichEmbed()
    .setTitle("Hey " + message.author.username + "!")
    .setThumbnail(serverIcon)
    .setColor("#FF0000")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription("Op dit moment zijn er " + message.guild.memberCount + " op deze server!")
    .setFooter("©Copyright claimed by koekiemonsterbot#9276! Doe not disturb!");
message.channel.send(ledenEmbed);

}

module.exports.help = {

    name: "leden"

}
