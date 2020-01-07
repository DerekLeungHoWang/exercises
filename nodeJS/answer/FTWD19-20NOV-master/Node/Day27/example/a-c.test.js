const Jedi = require('./starwars.js').Jedi;
const Sith = require('./starwars.js').Sith;
const duel = require('./starwars.js').duel;

describe('Testing the starwars duel function', ()=>{

    let fakeObiwan;
    let fakeAnakin;

    let spyFakeAnakinAttack;
    let spyFakeObiwanAttack

    beforeEach(()=>{
        fakeAnakin = new Sith('Fake Anakin Skywalker',100,1000);
        fakeObiwan = new Jedi("Fake Obiwan Kenobi",70,700);

        spyFakeAnakinAttack = jest.spyOn(fakeAnakin, 'attack').mockImplementation(()=>{
            console.log('This is a fake attack from the sith');
            return "Wow such violence from a sith"
        })

        spyFakeObiwanAttack = jest.spyOn(fakeObiwan, 'attack').mockImplementation(()=>{
            console.log('This is a fake attack from the jedi');
            return "Wow such violence from a jedi"
        })
    });

    test('to see if the methods within the duel function are called', ()=>{
        duel(fakeObiwan, fakeAnakin)

        expect(spyFakeAnakinAttack).toHaveBeenCalledTimes(6)
        expect(spyFakeObiwanAttack).toHaveBeenCalledTimes(6)

        expect(spyFakeAnakinAttack).toHaveBeenCalledWith(fakeObiwan)

        expect(fakeAnakin.attack()).toBe("Wow such violence from a sith")

    })


});