module.exports = ({
  name: "work", 
  code: `$cooldown[1h;⏰ You need to wait for %time%]
$author[WORK;$authorAvatar]
$description[You worked as** $randomText[Doctor;Farmer;Washer;Carpenter;Hacker;Pilot;Engineer].**
You earned **$random[25;1000] coins.**]
$color[FF2050]
$thumbnail[$authorAvatar]
$addTimestamp
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$randomText[25;90]]]
`
  });
