//! INterface
var user;
user = {
    name: "younes",
    age: 22,
    greet: function (text) {
        console.log(text + " " + this.name);
    }
};
console.log(user);
user.greet("hi there - i am");
var Per = /** @class */ (function () {
    function Per(n, age) {
        this.name = n;
        this.age = age;
    }
    Per.prototype.greet = function (text) {
        console.log(text + " " + this.name);
    };
    return Per;
}());
var p1 = new Per("younes", 22);
p1.greet("hello there - i am");
var Person2 = /** @class */ (function () {
    function Person2(n) {
        this.name = n;
    }
    Person2.prototype.greed = function (text) {
        console.log(text + " " + this.name);
    };
    return Person2;
}());
var p2 = new Person2("younes");
p2.greed("hello there - i am");
var Person3 = /** @class */ (function () {
    function Person3(n) {
        this.name = n;
    }
    Person3.prototype.greet = function (text) {
        console.log(text + " " + this.name);
    };
    return Person3;
}());
var p3;
p3 = new Person3("younes");
console.log(p3);
