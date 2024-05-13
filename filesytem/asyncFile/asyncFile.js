const fsPromises = require('fs').promises
const path = require('path')

const fileHandle = async()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'asynctext.txt'),'utf8')
        // console.log('data async',data)
        await fsPromises.writeFile(path.join(__dirname,'newfile.txt'),`${data} \tadded asyncText content also`)
        await fsPromises.appendFile(path.join(__dirname,'newAppendfile.txt'),'new append file while creating use appendfile')
        await fsPromises.rename(path.join(__dirname,'newAppendfile.txt'),path.join(__dirname,'renameAppendFile.txt'))
        // const dltFile = await fsPromises.unlink(path.join(__dirname,'deleteFile.txt'))
        // console.log('dltFile',dltFile)
    }catch(err){
        console.log('err while file handling',err)
    }
}
// fileHandle()