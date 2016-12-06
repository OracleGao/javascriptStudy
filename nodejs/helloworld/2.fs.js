var fs = require('fs');
fs.readFile('fs.js', 'utf-8', function(err, data){
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
fs.readFile('fs.jsp', 'utf-8', function(err, data){
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

console.log('end');

