"use strict";

var User = function User(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? " " : _ref$name,
      _ref$age = _ref.age,
      age = _ref$age === void 0 ? 0 : _ref$age,
      _ref$followers = _ref.followers,
      followers = _ref$followers === void 0 ? 0 : _ref$followers;
  this.name = name;
  this.age = age;
  this.followers = followers;
};

User.prototype.getInfo = function () {
  console.log("User ".concat(this.name, " is ").concat(this.age, " years old and has ").concat(this.followers, " followers"));
};

var mango = new User({
  name: "Mango",
  age: 2,
  followers: 20
});
mango.getInfo(); // User Mango is 2 years old and has 20 followers

var poly = new User({
  name: "Poly",
  age: 3,
  followers: 17
});
poly.getInfo(); // User Poly is 3 years old and has 17 followers