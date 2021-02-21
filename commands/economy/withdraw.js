module.exports = ({
  name: "withdraw", aliases: ['with'], 
  code: `$onlyIf[$getGlobalUserVar[Bank]>=$noMentionMessage;**😑 | You don't have enough money**]
$title[WITHDRAW]
$description[$message coins has been withdrawn!]
$color[00ff20]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$message[1]]]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank];$message[1]]]
$suppressErrors[Please enter a numerical value]
`
  });
