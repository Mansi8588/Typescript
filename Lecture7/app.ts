//  1. Type Guards

type combinable = string | number;
type numeric = number | boolean;

type Universal = combinable & numeric;

function add(a: combinable, b: combinable) {
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

// 2.

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type unknownEmployee = Admin | Employee;

const e1: ElevatedEmployee = {
  name: "younes",
  privileges: ["create-server"],
  startDate: new Date(),
};

function printEmployeeInfo(emp: unknownEmployee) {
  console.log("name: " + emp.name);

  // console.log("privileges: "+emp.privileges)  error ---> type guard

  // use in keyword


//   if ("privileges" in emp) {
//     console.log("privileges: " + emp.privileges);
//   }

if ("startDate" in emp) {
    console.log("startDate: " + emp.startDate);
}


  console.log("privileges: " + (emp as Admin).privileges); // type assertion
}


printEmployeeInfo(e1)
printEmployeeInfo({name:"max", startDate:new Date()})



class Car{
  drive(){
    console.log("driving a car...")

  }

}

class Truck{
  drive(){
    console.log("driving a truck...")
  }

  loadcargo(amount:number){
    console.log("loading cargo..."+amount)
  }

}

type Vehicle = Car | Truck;

const car=new Car();
const truck=new Truck();

function useVehicle(vehicle:Vehicle){
  vehicle.drive();
  // vehicle.loadcargo(1000) error ---> type guard

  if(vehicle instanceof Truck){
    vehicle.loadcargo(1000)
  }

  // if("loadcargo" in vehicle){
  //   vehicle.loadcargo(1000)
  // }


}

useVehicle(car)
useVehicle(truck) 







// 3.  Type Casting // Type Assertion


// sure as html element exists use !

// const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
const userInputElement= <HTMLInputElement>document.getElementById("user-input");

userInputElement.value="hi there!";

