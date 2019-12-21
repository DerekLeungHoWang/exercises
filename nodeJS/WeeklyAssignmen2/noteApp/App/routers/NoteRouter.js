const express = require("express");
var router = express.Router();

class NoteRouter{
    constructor(noteService){
        this.noteService = noteService;
    }

    router(){  
        router.get("/",this.get.bind(this))
        router.post('/', this.post.bind(this));
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
        .then((data)=>res.json(data))
        .catch((err)=>res.status(500).json(err));
    }

    // put(req,res){
    
    // }

    // delete(req,res){
    
    // }
}
    
module.exports = NoteRouter

