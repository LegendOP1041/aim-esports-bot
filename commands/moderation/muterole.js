module.exports = ({
  name: "muterole",
  code: `Server muted role has been set to <@&$getServerVar[mute]>
  $setServerVar[mute;$message[1]]
  $onlyPerms[admin;]
  $onlyIf[$isNumber[$message[1]]==true;Please give a valid role ID]
  `
  });
