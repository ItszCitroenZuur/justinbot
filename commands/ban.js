const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var botIcon = bot.user.displayAvatarURL;


    var kickGeenPermissionEmbed = new discord.RichEmbed()
    .setTitle("Ban")
    .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
    .setColor("#29ff54")
    .setThumbnail(botIcon)
    .addField("**Error!**", "U heeft hier niet de juiste permissies voor.");

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(kickGeenPermissionEmbed);

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    var kickGebruikerNietGevondenEmbed = new discord.RichEmbed()
    .setTitle("Kick")
    .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")        
    .setColor("#29ff54")
    .setThumbnail(botIcon)
    .addField("**Error!**", "Deze gebruiker is niet gevonden.");

    if (!banUser) return message.channel.send(kickGebruikerNietGevondenEmbed);

    var reason = arguments.join(" ").slice(22);


    var kickJeKanDezeGebruikerNietKickenEmbed = new discord.RichEmbed()
    .setTitle("Kick")
    .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
    .setColor("#29ff54")
    .setThumbnail(botIcon)
    .addField("**Error!**", "Je kan je collega's niet bannen!");

    if (banUser.hasPermission("BAN_MEMBERS")) return message.channel.send(kickJeKanDezeGebruikerNietKickenEmbed);

    var ban = new discord.RichEmbed()
    .setTitle("Title")
    .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")        
    .setColor("#29ff54")
    .setThumbnail(botIcon)
    .addField("**Kicked user:**", kickUser + "\n**Moderator**" +  message.author + "\n**Reden:**" + reason);

    var banChannel = message.guild.channels.find(`name`, "straffen");

    if (!banChannel) return message.guild.send("Ik kan het kanaal niet vinden! Maak een kanaal genaamd: 'straffen'");

    message.guild.member(banUser).ban(reason);

    message.channel.send(ban);

    banUser.send(ban);

    return;
}



module.exports.help = {

    name: "ban"

}