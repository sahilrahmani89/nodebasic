const log = require('./event')

const EventEmitter = require('events');

const emitter = new EventEmitter()

emitter.on('log',(msg)=>{
    console.log('msf',msg)
    log(msg)
})

// emitter.emit('log','Checks event emitter things')
