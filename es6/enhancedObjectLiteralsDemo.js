const User = require('./class.js')
let user = new User();
const obj = {
    // __proto__
    __proto__: user['__proto__'],
    // Shorthand for ‘handler: handler’
    // handler,
    // Methods
    toString() {
      // Super calls
      return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
console.log(obj.__proto__);
//console.log(obj.handler);
console.log(obj.toString());
console.log(obj['prop_42']);

