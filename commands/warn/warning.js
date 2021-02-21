module.exports = ({
  name: "warnings", 
  code: `$onlyPerms[kick;You are required Kick Permission to run this command]
$title[Warnings]
$color[3ffc00]
$description[<@$mentioned[1]> HAVE : $getUserVar[warn;$mentioned[1]] Warnings]
$footer[$username!]
$argsCheck[>1;Please mention somebody to see warns.]
$addReactions[☑]`
  });
