const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("je hebt hier geen permissie voor!");

if(!arguments[0]) return message.reply("geef een getal op.");

if(Number.isInteger(parseInt(arguments[0]))){

var amount = parseInt(arguments[0]) + 1;

message.channel.bulkDelete(amount).then(() => {

    message.channel.send(`${message.author.username} ik heb ${arguments[0]} verwijderd!`).then(msg => msg.delete(3000));

});

}else{
    return message.channel.send("Geef een getal op.");
}


}

module.exports.help = {
    name: "clear"
}