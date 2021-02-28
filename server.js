const dbd = require("dbd.js"); 

const Api = require("dbd.js/package/handlers/api");

Api();

const bot = new dbd.Bot({

  token: process.env.TOKEN,

  prefix: "a?"

});

bot.onMessage();

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"));

  for (const commands of folder) {
  const command = require(`./commands/${files}/${commands}`);

    bot.command({
      name: command.name,
      aliases: command.aliases, 
      code: command.code, 
      nonPrefixed: command.nonPrefixed
    })
   }
 }
bot.variables({
    Bank: "0",
    Money: "100",
    an: "", 
    env: "no", 
    warn: "0", 
    mute: "", 
    Afk: "off",
    Afkmsg: "0", 
    rch: "", 
    rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
    lvl: "0",
    exp: "0",
    rexp: "40",
    rsystem: "0"
})

bot .status({
  text: "AIM ESPORTS",
  type: "WATCHING",
  status: "online", 
  time: 12
})
