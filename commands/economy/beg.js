module.exports = ({
  name: "beg", 
  code: `$cooldown[1m;Bruh,This makes u a little baby, wait for %time%]
You have been given **$random[15;250]** coins by $randomText[a Kid;your parents]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[15;250]]]
`
  });
