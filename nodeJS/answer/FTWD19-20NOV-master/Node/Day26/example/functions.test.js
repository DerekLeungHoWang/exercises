const tripler = require('./functions.js');
const logger = require('./functions.js').logger;
const adder =require('./functions.js').addTogether;

describe('These tests are on the tripler function', ()=>{
    test('the tripler function triples 3 to 9', ()=>{
        expect(tripler(3)).toBe(9);
    });

    test('the tripler function triples 5 to 15', ()=>{
        expect(tripler(5)).toEqual(15);
    });
})

describe('These tests are on the logger function', ()=>{
    let outputData = '';

    beforeEach(()=>{
        outputData = "";
    });

    let storeLog = inputs => (outputData += inputs)

    test('the logger should output data on the console, like hello world', ()=>{
        console['log'] = jest.fn(storeLog);
        logger('Hello World!');

        expect(outputData).toBe('Hello World!');
    });

    test('the logger should output data on the console, like 45', ()=>{
        console['log'] = jest.fn(storeLog);
        logger(45);

        expect(outputData).toBe("45");
    });
})