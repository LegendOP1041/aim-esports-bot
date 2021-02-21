module.exports = ({
  name: "announce", 
  code: `$argsCheck[>1;Please write message]
$title[<a:aannounce:796760620787302400> ANNOUNCEMENT]
$color[#ff2052]
$description[$message]$useChannel[$getServerVar[an]]
$footer[Announcement by $username]
$suppressErrors`
  });
