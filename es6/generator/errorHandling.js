function *foo() {
  try {
    let x = yield 3;
    console.log("x: " + x); //may never get here
  } catch (err) {
    console.log("Error: " + err);
  }
  let y = yield 4;
  console.log("y: " + y);
  let z = yield 5;
  console.log("z: " + z);//may never get here and after lines
  yield 6;
}

const it = foo();
console.log(it.next());
it.throw("Oops 'let x'!");
console.log(it.next(2));
try {
  it.throw("Oops 'let z'!");
} catch (err) {
  console.log("Error: " + err);
  console.log("*foo jump out");
}
it.next();
