const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    if(!message.member.hasPermissions("KICK_MEMBERS")) return;

    const sayMessage = arguments.join(" ");

    message.delete().catch(O_o=>{}); 
  
    message.channel.send(sayMessage);

}

module.exports.help = {
    name: "say"
}