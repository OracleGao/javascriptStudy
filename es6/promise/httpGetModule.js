var http = require('http');
function get(option) {
  return new Promise((resolve, reject) => {
    let req = http.get(option);
    req.on('response', res => {
      let buffer = '';
      res.on('data', data => buffer += data);
      res.on('end', () => resolve(res, buffer));
    });
    req.on('error', err => reject(err));
    req.end();
  });
}
module.exports=get;
