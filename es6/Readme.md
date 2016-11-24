#es6/es2015 study
demo base on nodejs 6.9.1

#Arrow Functions

var braveNewWorld = function( world ) {
  console.log( "Welcome to" + world ); 
};

var braveNewWorld = ( world ) => {
  console.log( "Welcome to" + world ); 
};

#Let & Const

instead of 'var' to create new variables
let means can be reassigned
const means constant

WHEN TO USE LET VS CONST?
This one still confuses me, but a good rule of thumb is to ask whether or not you want the contents of a given variable to be changeable (nerd speak: mutable). If not, const is probably what you’re after.

#Template strings

const braveNewWorld = ( world ) => {
  console.log( `Welcome to ${world}` ); 
};
