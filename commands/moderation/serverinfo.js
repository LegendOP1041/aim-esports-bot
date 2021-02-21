module.exports = ({
  name: "serverinfo", 
  code: `$thumbnail[$serverIcon]
$color[02FFCF]
$title[Server Info]
$description[Server Name: **$serverName[$guildID]**
Server Invite Link:- [Click Here\\]($getServerInvite) 

Server ID: $guildID
Region: $serverRegion
Server Owner: <@$ownerID>
Server Created: $creationDate[$guildID]ㅤ

Total Members: $membersCount
Roles: $roleCountㅤㅤ
Verification level: $serverVerificationLevel
Emotes: $emojiCount
Channels: $channelCount]
$footer[|  Server Info;$serverIcon]`
  });
