function *foo(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;   //no suggestion that the final returned value would be thrown away,
              //when use iterating generator functions with for..of loops.
}

for (var v of foo()) {
  console.log(v);
}

console.log(v); // still '5', not '6' :(
