const fs = require('./promised-fs')
const pathModule = require('path')




function traverseFolders(path){
    fs.readdir(path)
    .then((files)=>{
        for(let file of files){
            const filePath = pathModule.join(path,file);
            outputFolderContent(filePath);     
        }
    }).catch((error)=>{
        console.log(error);
    });
}

function outputFolderContent(filePath){
    fs.stat(filePath)
    .then((stats)=>{
        if(stats.isDirectory()){
            console.log(filePath+" is a directory.")
            traverseFolders(filePath)
        }else{
            console.log(filePath+" is a file.")
        }
    })
    .catch((error)=>{
        console.log(error)
    });
}
outputFolderContent('./')