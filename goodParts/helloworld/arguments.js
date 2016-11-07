(function() {
  Object.getPrototypeOf(arguments).sum = function() {
    var i, sum = 0;
    for (i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  }
})();
var sum = function() {
  return arguments.sum();
}
document.writeln('arguments sum: ' + sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
document.writeln('arguments sum1: ' + (function(){return arguments.sum();})(1, 2, 3, 4, 5));
