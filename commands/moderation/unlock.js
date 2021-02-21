module.exports = ({
  name: "unlock", 
  code: `$color[02FFCF]
$onlyPerms[admin;❌ It requires admin perms]
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$title[Channel Unlocked]
$description[<#$channelID> has been **unlocked** by ** $username ** <a:ytien_477r:785328953283444767>
Reason: $message]
$footer[Now, chat!]
$deletecommand
`
  });
