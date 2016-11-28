function *foo() {
  try {
    yield 2;
  } catch (err) {
    console.log("foo caught: " + err);
  }
  throw "Oops *foo()";
}

function *bar() {
  yield 1;
  try {
    yield * foo();
  } catch (err) {
    console.log("bar caught: " + err);
  }
}
var it = bar();
console.log(it.next());//get 1 from *bar()
console.log(it.next());//get 2 from *foo()
it.throw("Oops outside!");
console.log(it.next());//finish
