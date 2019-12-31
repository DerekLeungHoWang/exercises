const fs = require('fs');

class NoteService{
    constructor(file){  //pass notes.json as argument
        this.file = file; //this.file = file from notes.json
        this.initPromise = null //assuming null in the beginning
        this.init()  //set up function for a better structure
    }
    init(){
        if(this.initPromise === null){
            this.initPromise = new Promise((resolve,reject)=>{
                this.read()
                .then(()=>{
                    resolve();
                })
                .catch(()=>{
                    this.notes ={};
                    this.write()
                        .then(resolve)
                        .catch(reject)
                })
            })
        }
        return this.initPromise;
    }

    read(){
        return new Promise((resolve,reject)=>{
            fs.readFile(this.file,'utf-8',(err,data)=>{
                if(err){
                    reject(err)
                }
                try{
                    this.notes = JSON.parse(data) //convert json to javascript
                } catch(e){
                    return reject(e)
                }
                return resolve(this.notes)
            })
        })
    }


    write(){
        return new Promise((resolve,reject)=>{
            fs.writeFile(this.file, JSON.stringify(this.notes),(err)=>{
                if(err){
                    return reject(err);
                }
                resolve(this.notes);
            })
        })
    }

    list(user){
        if(typeof user !== 'undefined'){
            return this.init() //just checks to see if it has run once. 
                .then(()=> {
                    return this.read()
                })
                .then(()=>{
                    if(typeof this.notes[user] === 'undefined'){
                        return [];
                    } else {

                        return this.notes[user];
                    }
                });
        } else {
             return this.init().then(()=>{
                return this.read();
            });
        }
    };

    add(note, user){
        return this.init().then(() => {
            if(typeof this.notes[user] === 'undefined'){
                this.notes[user] = [];
         }
            this.notes[user].push(note);
            return this.write();
        });
    };
    
    update(index, note, user){
        return this.init().then(()=>{
            if(typeof this.notes[user] === 'undefined'){
                throw new Error("Cannot update a note, if the user doesn't exist");
            }
            if(this.notes[user].length <= index ){
                throw new Error("Cannot update a note that doesn't exist");
            }
            this.notes[user][index] = note
            return this.write();
        });
    }

    remove(index, user){
        return this.init().then(()=>{
            if(typeof this.notes[user] === 'undefined'){
                throw new Error("Cannot remove a note, if the user doesn't exist");
            }
            if(this.notes[user].length <= index){
                throw new Error("Cannot remove a note that doesn't exist");
            }
        return this.read().then(()=>{
            this.notes[user].splice(index, 1);
            return this.write()
        });
        });
    }



}

module.exports = NoteService;