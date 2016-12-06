#!/usr/bin/env node

let promise = new Promise((resolve, rejcet) => resolve(1));
promise.then(val => {
  console.log(val);
  return val + 2;
}).then(val => console.log(val));

let get = require('./http-get-module');
get(({
  host: '10.1.10.20',
  port: 8888,
  path: '/portal/v1/health'
})).then((res, body) => {
  console.log(res.statusCode);
  console.log(res.headers);
  if (body) {
    console.log(body);
  }
  return {res: res, body: body};
}, err => console.log(err)).then(({res: res, body: body}) => {
  console.log(res.statusCode);
  console.log(res.headers);
  if (body) {
    console.log(body);
  }
}, err => console.log(err));
