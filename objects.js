var playlist = { "Bruce Springsteen": "Dancing in the Dark"}


function updatePlaylist(playList, artistName, songTitle){
return playList[artistName] = songTitle

  //return Object.assign({},playlist, { artistName: [songTitle]})
//return playlist
}



function removeFromPlaylist(playList, artistName){
return  delete playList.artistName;
//  return playList
}
