module.exports = ({
  name: "avatar", aliases: ['av'], 
  code: `$title[:camera_with_flash: | Avatar ]
$image[$userAvatar[$mentioned[1;yes]]?size=2048]
$footer[|  Asked by  $username!;$authorAvatar]
 ` 
});
