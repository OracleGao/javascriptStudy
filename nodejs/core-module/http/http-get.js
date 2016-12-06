#!/usr/bin/env node

var http = require('http');
var util = require('util');

var querystring = require('querystring');
var req = http.get({
  host: '10.1.50.54',
  port: 8080,
  path: '/portal'
});

req.on('response', function(res){
  res.setEncoding('utf8');
  var buffer = '';
  res.on('data', function(data){
    buffer += data;
  });
  res.on('end', function(){
    console.log(util.inspect(res));
    console.log(res.statusCode);
    console.log(buffer);
  });
});

req.on('error', function(err){
  if (err) {
    console.log(err);
  }
});

req.end();
