const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    
        var logChannel = message.guild.channels.find('id', '710068736308281354');


        var reason = arguments.join(" ").slice(22);

    const catergoryID = "709735300460576789";

    var geenPermissie = new discord.RichEmbed()
    .setTitle("Hey " +  message.author.username.toString() + "!")
    .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
    .setColor("#FF0000")
    .setThumbnail(message.author.displayAvatarURL)
    .setDescription("Je hebt hier geen permissie voor!");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(geenPermissie);

    if(message.channel.parentID == catergoryID){
        message.channel.delete();

    }else{
        var ticketCommando = new discord.RichEmbed()
        .setTitle("Hey " +  message.author.username + "!")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("Voer deze command uit in een ticket!");

    message.channel.send(ticketCommando);
    }
    
    var logEmbed = new discord.RichEmbed()
    .setTitle("Ticket")
    .setColor("#29ff54")
    .setDescription("Ticket gesloten")
    .addField("----", "**Gesloten door: **" + message.author.username + "\n **Reden: **" + reason)
    .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!");
    
    logChannel.send(logEmbed);
    


}

module.exports.help = {
    name: "close"
}
