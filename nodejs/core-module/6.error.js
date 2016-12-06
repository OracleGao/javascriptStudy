#!/usr/bin/env node
var emitter = new (require('events').EventEmitter)();
emitter.once('error', function(error) {
  console.log("error: " + error);
});

emitter.emit('error', 'error1');
emitter.emit('error', 'error2');

