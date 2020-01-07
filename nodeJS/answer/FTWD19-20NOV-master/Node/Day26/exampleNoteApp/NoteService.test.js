const NoteService = require('./NoteService');

describe('NoteService tests, simple', ()=>{
    test('List note', function(){
        const noteService = new NoteService()

        let notes = noteService.listNote()

        expect(notes).toEqual([]);
    })

    test('List note', function(){
        const noteService = new NoteService()

        let notes = noteService.listNote()

        expect(notes).toEqual([]);

        noteService.addNote('My first note');
        notes = noteService.listNote()
        expect(notes).toEqual(['My first note'])
    })
})