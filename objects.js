var playlist = {"Talking Heads" : "And She Was"}

function updatePlaylist(playlist, artistName, songTitle) {
  
}
describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    before(() => {
      playlist['Slowdive'] = 'Alison'
      playlist['My Bloody Valentine'] = 'Sometimes'
    })
    
  function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  
  return playlist
}