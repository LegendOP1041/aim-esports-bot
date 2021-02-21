module.exports = {
  name: "whois",
  code: `$title[User Info]
$color[00000f]
$description[**———————————————
Username: $username[$mentioned[1]]#$discriminator[$mentioned[1]]

Mention: <@$mentioned[1]>

ID: $mentioned[1]

Bot: $isBot[$mentioned[1]]

DM: $isUserDMEnabled[$mentioned[1]]

Tag: $discriminator[$mentioned[1]]

Highest Role:-
<@&$highestRole[$mentioned[1]]>

Creation Date: $creationDate[$mentioned[1]]

Roles:-
$userRoles[$mentioned[1]]
———————————————**]
$footer[Exectuted by: $username;$authorAvatar]
$suppressErrors`
};
