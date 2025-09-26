// UNION   ---> PIPE IN Typescript
// Literal Types
// TYPE ALIAS/ SURTOM TYPES
// LITERAL TYPES
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum = combine(10, 50);
var comb = combine("mansi", "rai");
console.log(sum, comb);
// !LITERAL TYPES ---> khud ka type
function combine2(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum2 = combine2(10, 50, "as-number");
var sum3 = combine2(10, "50", "as-number");
var comb2 = combine2("mansi", "rai", "as-string");
console.log(sum, comb, sum3, sum2);
function combine3(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum4 = combine3(10, 50, "as-number");
var sum5 = combine3(10, "50", "as-number");
var comb3 = combine3("mansi", "rai", "as-string");
console.log(comb3, sum4, sum5);
var user = {
    name: "mnh",
    age: 34,
    skills: ["react", "Node"]
};
function greet(user) {
    console.log("hello sir ".concat(user.name));
}
greet(user);
