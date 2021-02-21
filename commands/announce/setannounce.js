module.exports = ({
  name: "setannounce", 
  code: `$argsCheck[>1;Please mention the announcement channel]
$setServerVar[an;$mentionedChannels[1]]
$title[ANNOUNCE CHANNEL]
$color[#ff2052]
$description[**ANNOUNCE CHANNEL HAS BEEN SET !**]
`
  });
