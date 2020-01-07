const fs = require('fs');

class NoteService {
    constructor(file) {
        this.filename = file;
        this.notes = [];
        this.listNotePromise = this.listNote();
    }


    listNote() {
        return new Promise( (resolve, reject) => {
            fs.readFile(this.filename, 'utf-8',  (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                this.notes = JSON.parse(data);
                console.log(this.notes + " <======= service")
                resolve(this.notes);
            });
        });
    };

    addNote(note) {

        return new Promise((resolve, reject) => {
            this.listNotePromise.then(() => {
                this.notes.push(note);

                fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
                    reject(err);
                    return;
                })
                resolve('Success')
            })


        })
    }

    removeNote(index) {
        this.notes.splice(index, 1)
    }

    insertNote(index, note) {
        this.notes.splice(index, 0, note)
    }

}

module.exports = NoteService;