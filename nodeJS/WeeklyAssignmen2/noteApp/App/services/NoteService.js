const fs = require('fs');

class NoteService {
    constructor(file) {
        this.filename = file;
        this.notes = [];
        this.listNotePromise = this.listNote();
    }
    listNote() {
        console.log("Line 10:using listnote() in noteservice.js");
        
        return new Promise( (resolve, reject) => {
            fs.readFile(this.filename, 'utf-8',  (err, data) => {
                console.log("Line 14:using addNote() in noteservice.js");
                console.log(this.filename);
                console.log(data);
                if (err) {
                    reject(err);
                    return;
                }
                this.notes = JSON.parse(data);
                console.log("Line21:JSON.parse(data)");
                console.log(typeof this.notes);
                console.log(this.notes + " <======= service")
                resolve(this.notes);
            });
        });
    };

    addNote(note) {
       
        console.log("Line 26:using addNote() in noteservice.js");
        return new Promise((resolve, reject) => {
        console.log("Line 33:using addNote() in noteservice.js");
            this.listNotePromise.then(() => {
        console.log("Line 35:using addNote() in noteservice.js");     
        console.log(note); 
                this.notes.push(note);
                fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
                    reject(err);
                    return;
                })
                resolve('Success?')
            })
        })
    }
    removeNote(index) {
        console.log("Line 48: removeNote, NoteService.js");
        console.log(this.notes);
        return new Promise((resolve,reject)=>{
            console.log("Line 52");
            this.notes.splice(index, 1)
            console.log("LINE 54, After splice");
            console.log(this.notes);
            fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
                reject(err);
                // return;
            if(err){
                reject(err)
            } else{
                console.log('resolved <==== success')

                resolve("successfully deleted")
            }  
       
    })           
      })   
        
    }

    insertNote(index, note) {
        return new Promise((resolve,reject)=>{
            console.log("Line 72");
            
            this.notes.splice(index, 0, note)
            console.log("LINE 76 PUT, After splice");
            console.log(this.notes);

            fs.writeFile(this.filename, JSON.stringify(this.notes) , (err)=>{
                if(err){
                    reject(err)
                } else{
                    resolve("The note has been inserted")
                }
            })       
        })
        

    }

}

module.exports = NoteService;