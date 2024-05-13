const fs = require('fs')
const path = require('path')

const readStream = fs.createReadStream(path.join(__dirname,'stream.txt'),{encoding:'utf8'})
const writeStream = fs.createWriteStream(path.join(__dirname,'new-stream.txt'))

// readStream.on('data',(chunks)=>{
//     // console.log('chunks',chunks)
//     writeStream.write(chunks)
// })