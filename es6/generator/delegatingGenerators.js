function *foo() {
  yield 3;
  yield 4;
  console.log("foo");
  return 5;
  console.log("never get here");
}
function *bar() {
  yield 1;
  yield 2;

  /*
    let x = yield *foo(); //yield *foo() can get the return value of *foo() '5'
    yield x;
  */
  yield yield *foo();
  
  yield 6;
  console.log("bar");
}
for (let v of bar()) {
  console.log(v);
}

