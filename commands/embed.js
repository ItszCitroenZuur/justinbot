const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    if(!message.member.hasPermissions("KICK_MEMBERS")) return;

    const sayMessage = arguments.join(" ");

    message.delete().catch(O_o=>{}); 

    var sayEmbed = new discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(sayMessage)
    .setColor("#29ff54")
    .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!");

  
    message.channel.send(sayEmbed);

}

module.exports.help = {
    name: "embed"
}