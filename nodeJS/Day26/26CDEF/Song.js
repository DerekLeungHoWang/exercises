class Song{
    constructor(name,album, author){
        this.name = name;
        this.album = album;
        this.author = author;
    }
    isInSameAlbum(otherSong){
        return this.album === otherSong.album;
    }

    getDescription(){
        return `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author}`;
    }


};






module.exports = Song;

    // persistFavoriteStatus = function(value){

    //     throw new Error("Not Yet Implemented. ")

    // };