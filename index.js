const discord = require("discord.js");

const botConfig = require("./botConfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {

        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen!`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});

bot.login(process.env.token);
const activities_list = [
    "play.wartopia.nl",
    "NICKERD",
    "JUSTIN",
    "RICKERD"
];
bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 5000);
    console.log(`${bot.user.username} is er klaar voor!`);
});

bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    if (message.channel.name == '📟bot-commands' || message.channel.parentID == '709735300460576789'){

        var prefix = botConfig.prefix;

        var messageArray = message.content.split(" ");
    
        var command = messageArray[0];
    
        var arguments = messageArray.slice(1);
    
    
    
        var commands = bot.commands.get(command.slice(prefix.length));
    
        if (commands) commands.run(bot, message, arguments);
    }

});
