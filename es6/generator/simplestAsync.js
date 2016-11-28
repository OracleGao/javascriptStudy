var http = require('http');

function onGet(httpOption) {
  let key = JSON.stringify(httpOption);
  if (cache[key]) {
    setTimeout(function() {
      it.next(cache[key]); //generator is running, so need put into a callback function(javascript is a single thread)
    }, 0);
  } else {
    let req = http.get(httpOption);
    req.on('response', function(res) {
      var buffer = '';
      res.on('data', function(data) {
        buffer += data;
      });
      res.on('end', function() {
        cache[key] = buffer;
        it.next(buffer);
      });
    });
    req.on('error', function(err){
      if(err) {
	it.throw(err);
      }
    })
    req.end();
  }
}

function *main() {
  const httpOption = {
    host: '10.1.10.20',
    port: 21691,
    path: '/tub/v1/health'
  };
  const request1 = yield onGet(httpOption);
  console.log(request1);
  const request2 = yield onGet(httpOption);
  console.log(request2);
  const request3 = yield onGet({
    host: '10.1.10.20',
    port: 21691,
    path: '/tub/v1/data'
  });
  console.log(request3);
}
const cache = {};
let it = main();
it.next();
