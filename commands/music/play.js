module.exports=({
name: "play",
code: `$author[$replaceText[$replaceText[$checkCondition[$queueLength>1];false;Started playing];true;Next playing]: $playSong[$message;0s;yes;Not found.]]
$footer[YouTube]
$sendMessage[$replaceText[$replaceText[$checkCondition[$queueLength>0];false;Searching...];true;Added to queue.];no]
$argsCheck[>1;Please write name of song or put link video.]
$onlyIf[$voiceID!=;You need to join the voice channel]
$color[ca19ff]`
});
