class Playlist {
  constructor(name) {
    this.playlistName = name;
    this.songs = [];
  }
  
  addSong(songName) {
    this.songs.push(songName);
  }
  
  // Removes the first song in the playlist that
  // matches |songName|, case insensitive.
  removeSong(songName) {
    for (let i = 0; i < this.songs.length; i++) {
      const song = this.songs[i];
      if (song.toLowerCase() === songName.toLowerCase()) {
        this.songs.shift(i, 1);
        break;
      }
    }
  }
}

const playlist = new Playlist('More Life');
playlist.addSong('Passionfruit');
playlist.addSong('Fake Love');
console.log(playlist);
playlist.removeSong('passionfruit');
console.log(playlist);