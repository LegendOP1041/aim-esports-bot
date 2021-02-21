module.exports=({
name:"remove-song", aliases: ['remove'], 
code:`Removed ✅
$onlyIf[$getObjectProperty[status]==OK; :x: Failed, Error: $getObjectProperty[err]]
$djsEval[
(async() => {
const server = d.client.servers.get(d.message.guild.id)
try{
server.songs = server.songs.splice(d.args[0], 0)
d.object.status = "OK"
} catch(err) {
d.object.status = "NOT OK"
d.object.err = err.message
}
})()
]
$createObject[{}]
$onlyIf[isNumber[$message[0]]==true;:x: Argument "0" is not a number]
$onlyIf[$message[0]!=;:x: Argument "0" can't be empty/blank]`
})
