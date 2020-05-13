const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
var botIcon = bot.user.displayAvatarURL;
    var botEmbed = new discord.RichEmbed()
    .setTitle("Discord bot informatie")
    .setColor("#FF0000")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setThumbnail(botIcon)
    .addField("-----", "**Prefix:** !")
    .addField("-----", "**Bot naam:** " + bot.user.username + " \n **Creator:** Koekiemonsterbot#9276")
    .addField("-----", "**Gemaakt op:** " + bot.user.createdAt)
    .setFooter("©Copyright claimed by koekiemonsterbot#9276! Doe not disturb!");
message.channel.send(botEmbed);


}

module.exports.help = {

    name: "info"
}