module.exports = ({
  name: "embed", 
  code: `$onlyPerms[admin;**Sorry, It requires Admin perms for it! **]
$title[$splitText[1]]
$description[$splitText[2]]
$footer[$splitText[3]]
$color[$splitText[4]]
$thumbnail[$splitText[5]]
$textSplit[$message;|]
$suppressErrors[Correct usage: 'a?embed title | description | footer | color | thumbnail']
$deletecommand`

  });
