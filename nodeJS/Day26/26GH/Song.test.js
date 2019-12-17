let Player = require("./Player");

let Song = require("./Song");

let player;

let song;

let song2;
beforeEach(() => {
  player = new Player();

  song = new Song(
    "Just the way you are",
    "Doo-Wops & Hooligans (2010)",
    "Bruno Mars"
  );
  song2 = new Song("Grenade", "Doo-Wops & Hooligans (2010)", "Bruno Mars");

  expect.extend({
    toBeInTheSameAlbumAs(songExpect, song, song2){
      const pass = song.album === song2.album;
      if (pass) {
        return {
          message: () => `${song} and ${song2} do not have the same album`,
          pass: true
        };
      } else {
        return {
          message: () => `${song.album} and ${song2.album} do not have the same album`,
          pass: false
        };
      }
    }
  })
  expect.extend({
    toBeInTheSameName(songExpect, song, song2){
      const pass = song.name === song2.name;
      if (pass) {
        return {
          message: () => `${song} and ${song2} do not have the same name`,
          pass: true
        };
      } else {
        return {
          message: () => `${song.name} and ${song2.name} do not have the same name`,
          pass: false
        };
      }
    }
  })

  expect.extend({
    toBeInTheSameAuthor(songExpect, song, song2){
      const pass = song.author === song2.author;
      if (pass) {
        return {
          message: () => `${song} and ${song2} do not have the same author`,
          pass: true
        };
      } else {
        return {
          message: () => `${song.author} and ${song2.author} do not have the same author`,
          pass: false
        };
      }
    }
  })


});

afterEach(()=>{


})

describe("testing Song.js Class property", () => {
  test("name", () => {
    expect(song.name).toEqual("Just the way you are");
  });

  test("album", () => {
    expect(song.album).toEqual("Doo-Wops & Hooligans (2010)");
  });

  test("author", () => {
    expect(song.author).toEqual("Bruno Mars");
  });
});

describe("testing Song.js getDescriptin", () => {
  test("getDescription testing", () => {
    expect(song.getDescription()).toEqual(
      "The name of this song is Just the way you are and it is from the album Doo-Wops & Hooligans (2010). It is written by Bruno Mars"
    );
  });
});

describe("in the same album?", () => {
  test("song1 and song 2", () => {
    expect(song.isInSameAlbum(song2)).toEqual(true);
  });
});

describe("in the same album? EXPECT.EXTEND", () => {
  test("song1 and song 2", () => {
    expect(song).toBeInTheSameAlbumAs(song, song2);
  });
});

describe("same name, album and author ?", ()=>{
  test("song 1 and song 2", () => {
    expect(song).toBeInTheSameAlbumAs(song, song2);
  })

  test("song 1 and song 2", () => {
    expect(song).toBeInTheSameName(song, song2);
  })

  test("song 1 and song 2", () => {
    expect(song).toBeInTheSameAuthor(song, song2);
  })



})

//   describe("Players should be able to play songs", ()=>{

//     test("should be able to play a Song", () =>{

//       player.play(song);

//     expect(player.currentlyPlayingSong).toEqual(song);
//     // demonstrates the use of custom matchers
//       expect(player).toBePlaying(song);
//   });

// })
