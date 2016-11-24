class User {
  constructor(username, email) {
    //field attribtue
    this._email = email;
    this._username = username;
  }

//field method
  show() {
    console.log(this.info);
  }

  toString() {
    console.log('email:' + this._email);
    return JSON.stringify({'helloworld': 'helloworld', 'email': this._email, 'username': this._username});
  }

//getter & setter
  get info() {
    return this.username + ', ' + this.email ;
  }

  get username() {
    return this._username;
  }
  set username(username) {
    this._username = username;
  }

  get email() {
    return this._email;
  }
  set email(email) {
    console.log('set email: ' + email);
    this._email = email;
  }
}

//module.exports.User=User  same as  exports.User=User
module.exports=User // not eqauls exports=User(invalidation)
module.exports.User=User  //same as  exports.User=User
