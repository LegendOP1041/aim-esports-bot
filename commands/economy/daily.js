module.exports = ({
  name: "daily", 
  code: `$color[ff2050]
$title[DAILY REWARD]
$description[You have been given **$random[2000;2500]** coins as a daily reward]
$addTimestamp
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[2000;2500]]]
$cooldown[1d;Hey you need to wait %time%]
 `
  });
