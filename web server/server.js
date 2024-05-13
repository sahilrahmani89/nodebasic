const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const port = process.env.port || 4000

const server = http.createServer((req,res)=>{
    console.log('req',req,res)
})

server.listen(port,()=>console.log('server is runing pavithramohan.rao@ge.com.'))