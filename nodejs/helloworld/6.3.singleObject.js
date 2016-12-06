function Hello() {
  var name;
  this.setName = function(name) {
    this.name = name;
  };
  this.getName = function() {
    return this.name;
  };
}
module.exports = Hello;
module.exports.Hello = Hello;
// exports.Hello = Hello; //error
