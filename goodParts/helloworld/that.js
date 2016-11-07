thisObject = {};
thisObject.double = function() {
  this.value = 1;
  var helper = function() {
    this.value = this.value + this.value;
  };
  helper();
};
thisObject.double();
document.writeln('thisObject value: ' + thisObject.value);

thatObject = {};
thatObject.double = function() {
  var that = this;
  that.value = 1;
  var helper = function() {
    that.value = that.value + that.value;
  };
 
 helper();
};
thatObject.double();
document.writeln('thatObject value: ' + thatObject.value);

var fieldObject = {
  value: 1
};
fieldObject.double = function() {
  var helper = function() {
    this.value = this.value + this.value;
  };
  helper();
};
fieldObject.double();
document.writeln('fieldObject value: ' + fieldObject.value);

var fieldFunObject = {
  value: 1
};
fieldFunObject.double = function() {
  this.helper();
};
fieldFunObject.helper = function() {
  this.value = this.value + this.value;
};
fieldFunObject.double();
document.writeln('fieldFunObject value: ' + fieldFunObject.value);
