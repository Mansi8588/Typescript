// Object ,Array ,Tuple,Enum
var person = {
    firstName: "Max",
    age: 30,
    skills: ["Java", "TypeScript"]
};
// array
var fav;
fav = ["Java", "TS"];
var fav2;
fav2 = [1, true, "Java"];
// tuple
// fixed length and type
var person2 = ["Alice", 25];
// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person3 = {
    name: "Max",
    age: 30,
    skills: ["Java", "TypeScript"],
    products: [1, "Book"],
    role: Role.ADMIN
};
person3.products[0] = 23;
if (person3.role === Role.ADMIN) {
    console.log("is admin");
}
console.log(person3.products);
