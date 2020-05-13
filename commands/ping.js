const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

        // Message
        let pingingEmbed = new discord.RichEmbed()
            .setColor("#29ff54")
            .setDescription(`Pinging...`)
            .setTimestamp()
            .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")



        let pingEmbed = new discord.RichEmbed()
            .setColor("#29ff54")
            .addField(`**🏓 Pong!**`, `API Latency: ${Math.round(bot.ping)}ms`)
            .setTimestamp()
            .setFooter("©Copyright claimed by Koekiemonsterbot#9276! Do not disturb!")



        // Sending
        let pinging = await message.channel.send(pingingEmbed);
        pinging.edit(pingEmbed);

}

module.exports.help = {
    name: "ping"
}