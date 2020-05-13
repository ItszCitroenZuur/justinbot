const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    const catergoryID = "709735300460576789";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            var reachedLimit = new discord.RichEmbed()
                .setTitle("Hey " +  message.author.username.toString() + "!")
                .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
                .setColor("#29ff54")
                .setThumbnail(message.author.displayAvatarURL)
                .setDescription("Je hebt de limit van **1** ticket bereikt!");

            message.channel.send(reachedLimit);

            bool = true;
        }
    });

    if (bool == true) return;

    var createTicket = new discord.RichEmbed()
        .setTitle("Hey " +  message.author.username.toString() + "!")
        .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
        .setColor("#29ff54")
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("**Je ticket word gemaakt! Nog even geduld!**");

    message.channel.send(createTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(catergoryID).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find(`name`, "@everyone"), { "READ_MESSAGES": false });

            settedParent.overwritePermissions(message.author, {
                "READ_MESSAGES":true, "SEND_MESSAGES" : true,
                "ATTACH_FILES" : true, "CONNECT" : true,
                "CREATE_INSTANT_INVITES" : false, "ADD_REACTIONS" : true
            });

            
            settedParent.overwritePermissions(message.guild.roles.find(`name`, "Support Team"), {
                "READ_MESSAGES":true, "SEND_MESSAGES" : true,
                "ATTACH_FILES" : true, "CONNECT" : true,
                "CREATE_INSTANT_INVITES" : false, "ADD_REACTIONS" : true
            });



            var embedParent = new discord.RichEmbed()
            .setTitle("Hey" +  message.author.username.toString() + "!")
            .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")
            .setColor("#29ff54")
            .setThumbnail(message.author.displayAvatarURL)
            .setDescription("**Onze staff komt u zo snel mogelijk helpen!**");

            settedParent.send(embedParent);

        }).catch(err => {
            message.channel.send("Er is iets fout gelopen! Het is gemeld bij mijn owners!");
        });

    });

}

module.exports.help = {
    name: "new"
}