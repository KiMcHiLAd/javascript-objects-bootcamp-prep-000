var playlist = {"Talking Heads" : "And She Was"}


function deleteFromObjectByKey(object, key) { var object1 = object[key] delete object1[key] return object1 }

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  
  return playlist
}