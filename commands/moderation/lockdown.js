module.exports = ({
  name: "lockdown", 
  code: `$color[02FFCF]
$onlyPerms[admin;❌ It requires Admin Perms]
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$title[Channel on Lockdown]
$description[<#$channelID> has been put under **lockdown** by **$username** <a:ytien_477r:785328953283444767>
**Only Mods/Admins can talk until unlocked.**
Reason: $message]
$footer[Sorry for the inconvenience!]
$deletecommand`
  });
