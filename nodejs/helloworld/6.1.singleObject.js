function Hello() {
  var name;
  this.setName = function(name) {
    this.name = name;
  };
  this.getName = function() {
    return this.name;
  };
}
exports.Hello = Hello;
