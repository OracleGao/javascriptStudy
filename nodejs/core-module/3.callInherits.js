#!/usr/bin/env node

var Base = require('./1.inherits').Base;
var Sub = require('./1.inherits').Sub;

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);
objSub.setName('sub');
objSub.showName();
console.log(objSub);

objSub.sayHello();

