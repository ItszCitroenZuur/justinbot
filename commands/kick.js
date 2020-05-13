const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var kickGeenPermissionEmbed = new discord.RichEmbed()
        .setTitle("Kick")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(authorIcon)
        .addField("**Error!**", "U heeft hier niet de juiste permissies voor.");

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(kickGeenPermissionEmbed);

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    var authorIcon = bot.user.displayAvatarURL

    var kickGebruikerNietGevondenEmbed = new discord.RichEmbed()
        .setTitle("Kick")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(authorIcon)
        .addField("**Error!**", "Deze gebruiker is niet gevonden.");

    if (!kickUser) return message.channel.send(kickGebruikerNietGevondenEmbed);

    var reason = arguments.join(" ").slice(22);

    var authorIcon = message.author.displayAvatarURL;


    var kickJeKanDezeGebruikerNietKickenEmbed = new discord.RichEmbed()
        .setTitle("Kick")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(authorIcon)
        .addField("**Error!**", "Je kan je collega's niet kicken!");

    if (kickUser.hasPermission("KICK_MEMBERS")) return message.channel.send(kickJeKanDezeGebruikerNietKickenEmbed);


    var kick = new discord.RichEmbed()
        .setTitle("Kick")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(authorIcon)
        .addField("**Kicked user:**", kickUser + "\n**Moderator**" + message.author + "\n**Reden:**" + reason);

    message.guild.member(kickUser).kick(reason);

    kickUser.send(kick);

    return;
}


module.exports.help = {

    name: "kick"

}
