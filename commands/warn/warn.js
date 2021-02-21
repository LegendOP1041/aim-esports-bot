module.exports = ({
  name: "warn", 
  code: `$onlyIf[$isUserDMEnabled[$mentioned[1]]!=false; Warning Lodged For <@$mentioned[1]> There DM's Are Disabled]
$dm[$mentioned[<]]
$onlyIf[$isBot[$mentioned[1]]!=true;❌**You can't warn a bot!**]
$argsCheck[>1;**Please mention someone**]
$argsCheck[>2;**Please give a reason**]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$onlyPerms[kick;You are required Kick Permission to run this command]
$title[Warn]
$color[#FF0000]
$description[You were warned in $serverName[$guildID] for: $noMentionMessage]
$deletecommand`
  });
