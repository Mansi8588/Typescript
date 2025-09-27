//! INterface


// type Person ={
//     name: string;
//     age: number;
//     greet(text: string): void;
// }

interface Person {
    name: string;
    age: number;
    greet(text: string): void;
}

let user:Person

user={
    name: "younes",
    age: 22,
    greet(text: string){
        console.log(text + " " + this.name)
    
    }
}

console.log(user) 
user.greet("hi there - i am")


class Per implements Person{
    name: string;
    age: number;
    constructor(n:string,age:number){
this.name=n;
this.age=age;

}
greet(text: string): void {
    console.log(text + " " + this.name)
}
}


const p1=new Per("younes",22)
p1.greet("hello there - i am")




// !readonly properties
// Access Modifiers not use here
// readonly properties can only be initialized when they are declared or in the constructor of the class.

interface Greed{
   readonly name: string;
    greed(text: string): void;
}

class Person2 implements Greed{
    name: string;
    constructor(n:string){
        this.name=n;
    }
    greed(text: string): void {
        console.log(text + " " + this.name)
    }
}

const p2=new Person2("younes")
p2.greed("hello there - i am")
// p2.name="younes2"  // cannot reassign because readonly





// !Extending interfaces

interface Named{
    readonly name: string;
}

interface Greet extends Named{
    greet(text: string): void;
}
class Person3 implements Greet{
    name: string;
    constructor(n:string){
        this.name=n;
    }
    greet(text: string): void {
        console.log(text + " " + this.name)
    }
}
let p3:Greet
 p3=new Person3("younes")
 console.log(p3)



//  type func=(n1:number,n2:number)=>number

//  let add:func;
//  add=(n1:number,n2:number)=>{
//     return n1+n2
//     }

//    let x= add(2,3)
//    console.log(x)


interface Func{
    (n1:number,n2:number):number
}


// Optional (?)

interface Optional{
    readonly name:string;
    outputName?:string;
}


// no error even outputname is not define
class Person4 implements Optional{
    name: string;
    constructor(n:string){
        this.name=n;
   }
}