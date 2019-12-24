const express = require("express");
var router = express.Router();

class NoteRouter{
    constructor(noteService){
        this.noteService = noteService;
    }

    router(){  
        router.get("/",this.get.bind(this));
        router.post('/', this.post.bind(this));
        router.delete('/:id', this.delete.bind(this));
        router.put('/:id', this.put.bind(this));
        return router
    }

    get(req,res){
        return this.noteService.listNote()
        .then((data)=>res.json(data))
        .catch((err)=>res.status(500).json(err));
    }
    post(req,res){
        console.log("Line21, NoeRouters activating");
        console.log(req.body.content);
        let noteBody = req.body.content

        return this.noteService.addNote(noteBody)
        .then((data)=> {
            this.noteService.listNote().then((data)=>{
                console.log(data,"Line30 in RouterJS")
                res.json(data)
            })
        }) //
        .catch((err)=>res.status(500).json(err));
    }

    put(req,res){
        console.log("line 32, noteservice.js");
        return this.noteService.insertNote(req.params.id, req.body.content)
        .then((data)=>{
            this.noteService.listNote().then((data)=>{
                console.log(data, "LINE42 in routerJS");
                res.json(data)
            })
        })
        .catch((err)=>res.status(500).json(err));
    }

    delete(req,res){
        console.log("Line 35 in delete router, delete activating==============<><>");
        console.log(req.body);
        console.log(req.params);
        console.log(req.params.id); 
        return this.noteService.removeNote(req.params.id)
        .then((data)=>{
            console.log('resolved')
            console.log(data, "<===== router")
            res.json(data)}) //
        .catch((err)=>res.status(500).json(err));
    }
}
    
module.exports = NoteRouter

