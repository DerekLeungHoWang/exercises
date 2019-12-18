let Sith = require('./starwars').Sith
let Jedi = require('./starwars').Jedi
let duel = require('./starwars').duel




describe("starwar.js", ()=>{

    let fakeObiwan;
    let fakeAnakin;
    beforeEach(()=>{
        fakeObiwan = new Jedi("fake Obiwan Kenobi",70,700);
        fakeAnakin = new Sith("fake Anakin Skywalker",100,1000);

});
    test('fighting', ()=>{
        let spyFakeAnakinAttack = jest.spyOn(fakeAnakin, 'attack')
        
        let spyFakeObiwanAttack = jest.spyOn(fakeObiwan, 'attack')
        duel(fakeObiwan,fakeAnakin)

        expect(spyFakeAnakinAttack.toHaveBeenCalledTimes(6))
        expect(spyFakeObiwanAttack.toHaveBeenCalledTimes(6))
    })
})

// .mockImplementation(()=>{
//     console.log(" this is a fake attack from Sith");
//  return such violence from the Sith
    
// })


