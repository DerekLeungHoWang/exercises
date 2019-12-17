let Player = require('./Player');

    let Song = require('./Song');

    let player;

    let song;

    let song2;
    beforeEach(()=> {
        player = new Player();

        song = new Song('Just the way you are','Doo-Wops & Hooligans (2010)', 'Bruno Mars')
        song2 = new Song('Grenade','Doo-Wops & Hooligans (2010)', 'Bruno Mars')

        expect.extend({
          toBeInTheSameAlbumAs(songExpect, song, song2){

            const pass = (song.album === song2.album)
            if(pass){
              return{
                message:()=>
                `${song} and ${song1} are in the same Album`,
                pass:true,
              };
            }else{
              return{
                message:()=>
                `${song} and ${song1} are NOT in the same Album`,
                pass:false,
              }
            }
          }
        })
    })  
    
    describe("testing Song.js Class property", ()=>{
      test('name', ()=>{
        expect(song.name).toEqual('Just the way you are');
      }) 

      test('album', ()=>{
        expect(song.album).toEqual('Doo-Wops & Hooligans (2010)');
      }) 

      test('author', ()=>{
        expect(song.author).toEqual('Bruno Mars')
      })

    })

    describe("testing Song.js getDescriptin",()=>{
      test('getDescription testing', ()=>{
        expect(song.getDescription()).toEqual('The name of this song is Just the way you are and it is from the album Doo-Wops & Hooligans (2010). It is written by Bruno Mars')
      })
    })

    describe("in the same album?",()=>{
      test('song1 and song 2', ()=>{
        expect(song.isInSameAlbum(song2)).toEqual(true)
      })
    })

    describe("in the same album?",()=>{
      test('song1 and song 2', ()=>{

expect(song).toBeInTheSameAlbumAs(song, song2)  
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

