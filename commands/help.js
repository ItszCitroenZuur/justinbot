const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {



    var helpEmbed = new discord.RichEmbed()
        .setTitle("Help!")
    .setColor("#29ff54")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("-------", "**Prefix: ** !")
        .addField("Leden: ", "**-bug ** Geeft je bug door \n  \n **-help** Laat dit bericht zien \n **-idee** Geeft je idee door \n **-info** Geeft info over de bot \n **-leden** Laat zien hoeveel leden er op de server zitten \n **-ping** Pong!  \n **-serverinfo** Geeft info over de server \n **-new** Maakt een ticket aan")
        .addField("Staff:", "**-ban** Bant iemand  \n **-clear** Verwijderd aantal berichten \n **-kick** Kickt iemand \n **-say** De bot zegt het dan \n **-embed** Zegt iets in een embed \n **-close** Sluit een ticket  \n **-warn** Warnt iemand")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!");

        message.channel.send(helpEmbed);


}

module.exports.help = {
    name: "help"
}
