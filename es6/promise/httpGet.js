#!/usr/bin/env node

let get = require('./httpGetModule');
let promise = get(({
  host: '10.1.10.20',
  port: 8888,
  path: '/portal/v1/health'
}));

promise.then((res, body) => {
  console.log(res.statusCode);
  console.log(res.headers);
  if (body) {
    console.log(body);
  }
  return {res: res, body: body};
}, err => console.log(err));

.then(({res: res, body: body}) => {
  console.log(res.statusCode);
  console.log(res.headers);
  if (body) {
    console.log(body);
  }
}, err => console.log(err));
