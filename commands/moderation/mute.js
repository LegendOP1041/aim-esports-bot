module.exports = ({
  name: "mute", 
  code: `$giveRoles[$mentioned[1];$getServerVar[mute]]
$title[Mute]
$color[02FFCF]
$description[<@$mentioned[1]> is muted by $username]
$footer[Made by $username]
$argsCheck[>1;Plz mention someone]
$onlyPerms[admin;YOU CANT USE THAT COMMAND]
$suppressErrors[❌ Please add a server muted role by \`a?muterole <role ID>\`]
`
});
