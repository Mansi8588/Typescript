// Generics intro
// one type connected to another type
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var fruits = ["apple", "banana"]; // string[]
fruits.push("orange");
fruits.push("kiwi");
fruits.push("pomegranate");
console.log(fruits);
var Boy = {
    name: "Ambuj",
    age: 22
};
var people = [];
people.push({ name: "Lucky", age: 20 });
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var res = merge({ name: "mansi" }, { role: "software engineer" });
console.log(res);
// 2. generics with constraints
function merge2(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = merge2("age", 22, true);
console.log(obj);
var numberBox = { value: 123 };
var stringBox = { value: "hello" };
console.log(numberBox);
console.log(stringBox);
// Uses default <string>
var response1 = {
    stat: 200,
    data: "success",
};
// Explicitly sets <number[]>
var response2 = {
    stat: 200,
    data: [1, 2, 3, 4, 5],
};
console.log(response1);
console.log(response2);
// 5. generics with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello, World!");
console.log(stringContainer.getContent());
// Generic with array
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4, 5]);
var firstString = getFirst(["apple", "banana", "cherry"]);
console.log(firstNumber);
console.log(firstString);
function getProperty(obj, key) {
    return obj[key];
}
var prw = { name: "ambuj", age: 22 };
var personName = getProperty(prw, "name");
console.log(personName);
