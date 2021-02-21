module.exports = ({
  name: "weekly", 
  code: `$color[ff2050]
$title[WEEKLY REWARD]
$description[You have been given **$random[6000;10000]** coins as a weekly reward]
$addTimestamp
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[6000;10000]]]
$thumbnail[https://cdn.discordapp.com/attachments/794463943800127489/797798792409513984/1610280425408.png]
$cooldown[7d;**You have to wait \`%time%\` for your next weekly reward**]
`
  });
