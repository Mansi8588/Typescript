// Object ,Array ,Tuple,Enum

const person :{
    firstName:string;
    age:number;
    skills:string[];
}={
    firstName:"Max",
    age:30,
    skills:["Java","TypeScript"]
}

// array
let fav:string[];
fav=["Java","TS"];
 
let fav2:any[];
fav2=[1,true,"Java"];


// tuple
// fixed length and type
let person2: [string, number] = ["Alice", 25];


// enum
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person3 :{
    name:string;
    age:number;
    skills:string[];
    products:[number,string];
    role:Role
}={
    name:"Max",
    age:30,
    skills:["Java","TypeScript"],
    products:[1,"Book"],
    role:Role.ADMIN
}
person3.products[0]=23;

if(person3.role===Role.ADMIN){
    console.log("is admin");
}


console.log(person3.products);