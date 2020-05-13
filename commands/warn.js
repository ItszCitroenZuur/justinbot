const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (bot, message, arguments) => {

    var authorIcon = message.author.displayAvatarURL;

    var warnNoPermission = new discord.RichEmbed()
        .setTitle("Warn")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(authorIcon)
        .addField("**Error!**", "U heeft hier niet de juiste permissies voor.");

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(warnNoPermission);

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    var WarnGebruikerNietGevondenEmbed = new discord.RichEmbed()
        .setTitle("Warn")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(authorIcon)
        .addField("**Error!**", "Deze gebruiker is niet gevonden.");

    if (!user) return message.channel.send(WarnGebruikerNietGevondenEmbed);
    var canNotWarn = new discord.RichEmbed()
        .setTitle("Warn")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(authorIcon)
        .addField("**Error!**", "Je kan je collega's niet warnen!");
    if (user.hasPermission("KICK_MEMBERS")) return message.channel.send(canNotWarn);

    var reason = arguments.join(" ").slice(22);

    var geenRedenEmbed = new discord.RichEmbed()
        .setTitle("Warn")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(authorIcon)
        .addField("**Error!**", "Geef een reden op!");

    if (!reason) return message.channel.send(geenRedenEmbed);

    var warnEmbed = new discord.RichEmbed()
        .setTitle("Warn")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(authorIcon)
        .addField("-------", "**Warned user: **" + user + "\n**Moderator: **" + message.author + "\n**Reden: **" + reason + "\n**Aantal warns: **" + warns[user.id].warns);

    message.channel.send(warnEmbed);

    user.send(warnEmbed);


    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

}
module.exports.help = {
    name: "warn"
}