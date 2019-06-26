var playlist = { "Bruce Springsteen": "Dancing in the Dark"}


function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({},playlist, { artistName: [songTitle]})
return playlist
}


/*
function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist
}
*/
