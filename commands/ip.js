const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var ipEmbed = new discord.RichEmbed()
        .setTitle("Hey " + message.author.username)
        .setDescription("Het IP is **play.wartopia.nl**")
        .setColor("#29ff54")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!");

    message.channel.send(ipEmbed);

}

module.exports.help = {

    name: "ip"

}