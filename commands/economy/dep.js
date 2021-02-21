module.exports = ({
  name: "deposit", aliases: ['dep'], 
  code: `$onlyIf[$getGlobalUserVar[Money]>=$noMentionMessage;**😐 | You don't have enough money**]
$author[DEPOSITE;$authorAvatar]
$description[$message[1] coins has been deposite!]
$color[RANDOM]
$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank];$message[1]]]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];$message[1]]]
$onlyIf[$isNumber[$message[1]]==true;Give a valid number]
`
  });
