module.exports = ({
  name: "help", 
  code: `$onlyIf[$isUserDMEnabled[$authorID]!=false; ❌ Help Logged for you, your DM is disabled]
$color[000001]
$description[**<@$authorID> Check your DM **✅]
$deleteIn[3s]`
});
