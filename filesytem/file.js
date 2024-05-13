const fs = require('fs')
const path = require('path')
//  synchrnoise way to handle read and write file

fs.readFile(path.join(__dirname,'note.txt'),'utf8',(err,data)=>{
    if(err) throw err
    // console.log(data)   
})

// console.log('Check synchronisation')

fs.writeFile(path.join(__dirname,'note.txt'),'\n\naddes something',(err,data)=>{
    if(err) throw err
    // console.log(data)   
})
fs.appendFile(path.join(__dirname,'note.txt'),'\teww',(err,data)=>{
    if(err) throw err
    // console.log(data)
})

process.on('uncaughtException',err=>{
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})