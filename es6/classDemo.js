let User = require('./class.js');
const user = new User('Oracle Gao', 'oraclegao@126.com');
user.show();
user.email='11';
user.show();
console.log(user.toString());
const user1 = new User.User('lingling', 'lingling@126.com');
user1.show();
user1.email='11';
user1.show();
console.log(user1.toString());
