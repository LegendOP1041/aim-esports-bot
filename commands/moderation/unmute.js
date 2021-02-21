module.exports = ({
  name: "unmute", 
  code: `$takeRoles[$mentioned[1];$getServerVar[mute]]
$title[UnMute]
$color[RANDOM]
$description[<@$mentioned[1]> is Unmuted by $username]
$footer[Executed by $username]
$argsCheck[>1;Plz mention someone]
$onlyPerms[admin;You can't use the command]
`
});
