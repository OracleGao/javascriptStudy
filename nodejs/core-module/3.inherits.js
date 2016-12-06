function Base() {
  this.base = 1991;

  this.sayHello = function() {
    console.log('Hello ' + this.name);
  }
}

Base.prototype.showName = function() {
  console.log(this.name);
}

Base.prototype.setName = function(name) {
  this.name = name;
}

Base.prototype.name = 'base';

function Sub() {
}

var util = require('util');
util.inherits(Sub, Base);

exports.Base = Base;
exports.Sub = Sub;

