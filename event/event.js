const {format} = require('date-fns')
const {v4:uuidv4} = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')


const logs= async(message) =>{
    const dateTime = `${format(new Date(), 'MM/dd/yyyy')}`
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`
    // console.log('logItem',logItem)
    try{
        await fsPromises.appendFile(path.join(__dirname,'events.txt'),logItem)
    }catch(err){
        console.log('err while logEvents',err)
    }
}

module.exports = logs
