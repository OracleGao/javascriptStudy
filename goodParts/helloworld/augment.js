Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    console.log('binding method: ' + name);
    this.prototype[name] = func;
    return this;//??must??
  }
  console.log('method: ' + name + ' exsits');
}

Number.method('integer', function(){
  return Math[this <0 ? 'ceil': 'floor'](this);
});

String.method('myTrim', function(){
  return this.replace(/^\s+|\s+$/g, '');
});

document.writeln((-10 / 3).integer());
document.writeln("  trimed  ".myTrim());
