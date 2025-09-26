// !Function return type
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(32, 53));
function greet(name) {
    console.log("hi ".concat(name));
}
var combineFunction;
//  combineFunction=10 // invlid
// combineFunction=function(){} // valid
combineFunction = add;
console.log(combineFunction(3, 5));
// good practice
var combineFunction2;
function addHandle(num1, num2, cb) {
    var res = num1 + num2;
    cb(res);
}
addHandle(10, 20, function (res) {
    console.log("".concat(res));
});
