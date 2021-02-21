module.exports=({
name: "lyrics", aliases: ['l'], 
code:`$title[$songInfo[title]'s Lyrics.] 
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No Lyrics Found for this song.]]
$suppressErrors[Failed finding lyrics with that song-name.]
$color[RANDOM]
$onlyIf[$voiceID!=;]
$onlyIf[$message==;]
`
})
