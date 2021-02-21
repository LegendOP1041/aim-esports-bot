module.exports = ({
  name: "dm", 
  code: `$onlyIf[$isUserDMEnabled[$message[1]]!=false;❌ DM message logged for user,there DM is disabled]
$color[000001]
$description[**<@$authorID> message has been sent** <a:checkanimated:787699373688881173>]
$deleteIn[3s]
$deletecommand
$suppressErrors
`
  });
