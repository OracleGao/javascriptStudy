var hello1 = new (require('./6.3.singleObject').Hello)();
hello1.setName('1024');
console.log(hello1.getName());

var hello2 = new (require('./6.3.singleObject'))();
hello2.setName('4201');
console.log(hello2.getName());
