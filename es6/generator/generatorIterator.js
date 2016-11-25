function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6; //no suggestion that the final returned value would be thrown away,
              //when use iterating generator functions with for..of loops.
}

var it = foo();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function *foo1(x) {
  let y = 2 * (yield (x + 1));
  let z = yield (y / 3);
  return (x + y + z);
}

var it1 = foo1(5);
console.log(it1.next()); // no yeild expression to receive
console.log(it1.next(12)); //yeild (x + 1) replace by 12, so  y = 24;
console.log(it1.next(13)); //yeild (y /3 ) replace by 13, so z = 13;
console.log(it1.next());   //24 + 13 + 5 = 42
console.log(it1.next());
