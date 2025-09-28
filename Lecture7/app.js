//  1. Type Guards
function add(a, b) {
    // return a+b;  error
    // add type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(2, 3));
console.log(add("younes", 3));
console.log(add("younes", "lakhoua"));
var e1 = {
    name: "younes",
    privileges: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInfo(emp) {
    console.log("name: " + emp.name);
    // console.log("privileges: "+emp.privileges)  error ---> type guard
    // use in keyword
    //   if ("privileges" in emp) {
    //     console.log("privileges: " + emp.privileges);
    //   }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
    console.log("privileges: " + emp.privileges); // type assertion
}
printEmployeeInfo(e1);
printEmployeeInfo({ name: "max", startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving a car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving a truck...");
    };
    Truck.prototype.loadcargo = function (amount) {
        console.log("loading cargo..." + amount);
    };
    return Truck;
}());
var car = new Car();
var truck = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // vehicle.loadcargo(1000) error ---> type guard
    if (vehicle instanceof Truck) {
        vehicle.loadcargo(1000);
    }
    // if("loadcargo" in vehicle){
    //   vehicle.loadcargo(1000)
    // }
}
useVehicle(car);
useVehicle(truck);
// 3.  Type Casting // Type Assertion
// sure as html element exists use !
// const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
var userInputElement = document.getElementById("user-input");
userInputElement.value = "hi there!";
