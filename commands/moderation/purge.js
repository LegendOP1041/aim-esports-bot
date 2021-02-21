module.exports = ({
  name: "purge", 
  code: `$onlyPerms[managemessagesx;]
$clear[$message]
$argsCheck[>1;**Correct Ussage: a?purge <digit>**]
$suppressErrors
$cooldown[3;Too fast though]
`
  });
