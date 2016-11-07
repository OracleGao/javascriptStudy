var add = function() {
  if (typeof a != 'number' || typeof b != 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    };
  }
  return a + b;
}
var tryIt = function() {
  try {
    add("seven");
  } catch (e) {
    document.writeln(e.name + ': ' + e.message);
  } 
}

tryIt();
