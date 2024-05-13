// how to get pathname in nodejs 
// different ways 
const path = require('path')

//
// console.log('__dirName',__dirname) 
// its include directory parent folder where file kept (exclude file name)
// console.log('__fileName',__filename)
// its include directory with its filename include.

// console.log(path.dirname(__filename))// it will work asame as __dirname
// console.log(path.basename(__filename))// provide specific file name
// console.log(path.extname(__filename)) // provide file extension
// console.log(path.parse(__filename)) 
// above one provide an object with key and values such as
// root
// directory /dir 
// base 
// ext 
// name 

