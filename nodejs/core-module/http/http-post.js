#!/usr/bin/env node

var http = require('http');
var requestBody = {
  userId: 'admin',
  password: 'passw0rd'
}
//var querystring = require('querystring');
//var contents = querystring.stringify({
//  method: 'POST',
//  url: 'login'
//});
var options = {
  host: '10.1.10.20',
  port: 8888,
  path: '/portal/v1/system/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}
/*
var req = http.request(options, function(res){
  res.setEncoding('utf8');
  res.on('data', function (data){
    console.log(JSON.parse(data));
  });
});
*/
var req = http.request(options);
req.on('response', function(res){
  res.setEncoding('utf8');
  res.on('data', function (data){
    console.log(JSON.parse(data));
  });
});
req.on('error', function(err){
  if (err) {
    console.log(err);
  } 
});
req.write(JSON.stringify(requestBody));
req.end();

