#!/usr/bin/env supervisor

var http = require('http');
var url = require('url');
var util = require('util');

var server = new http.Server();
server.on('request', function(req, res){
  var methodPrefix = 'ON_';
  console.log(req.url);
  console.log(util.inspect(req.headers));
  res.writeHead(200);
  this.emit(methodPrefix + req.method, req, res, url.parse(req.url, true));
  console.log(req.method);
});
server.on('ON_GET', function(req, res, param){
  console.log('on http get');
  console.log(util.inspect(param));
  res.write(util.inspect(param));
  res.end();
});
server.on('ON_POST', function(req, res, param){
  console.log('on http post');
  console.log(util.inspect(param));
  res.write(util.inspect(param));
  res.write('\r\n');
  var buffer = '';
  req.on('data', function(data){
    buffer += data;
  });
  req.on('end', function(){
    console.log('content: ' + buffer);
    res.write('content: ' + buffer);
    res.end();
  });
});
server.listen(3000);
console.log("HTTP server is listening at port 3000.");
