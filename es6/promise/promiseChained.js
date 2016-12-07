#!/usr/bin/env node

let delayFunc = require('./delayFunc');

delayFunc(1000, ['p1', 'p2', 'p3']).then(func).then(func).then(func).then(func).then(func);

function func(params) {
  console.log("----------------");
  if (params && params instanceof Array) {
    params.forEach(e => console.log(e));
    if (params.length > 1) {
      return delayFunc(1000, params.slice(1));
    }
  } else {
    console.log(params);
  }
  return delayFunc(1000, params);
}

