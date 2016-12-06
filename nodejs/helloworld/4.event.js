var event = new (require('events').EventEmitter)();

event.on('some_event', function() {
  console.log('some event oocured.');
});

setTimeout(function(){
  event.emit('some_event');
}, 1000);
