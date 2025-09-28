// Generics intro
// one type connected to another type






const fruits: Array<string> = ["apple", "banana"]; // string[]

fruits.push("orange");
fruits.push("kiwi");
fruits.push("pomegranate");
console.log(fruits);


type Person = {
    name: string;
    age: number;
}

const Boy: Person = {
    name: "Ambuj",
    age: 22
}

const people: Array<Person> = [];
people.push({name: "Lucky", age: 20});



function merge<T,U>(obj1:T, obj2:U){
    return {...obj1, ...obj2}
}

const res=merge({name:"mansi"},{role:"software engineer"} )
console.log(res)




// 2. generics with constraints
function merge2<T extends string,U extends number,V extends boolean>
(key:T,value:U,isActive:V):
{
key:T,value:U,isActive:V
}
{
    return {key,value,isActive}
}

const obj=merge2("age",22,true)
console.log(obj)











  // 3. generics with interface

  interface Box<T>{
    value:T
  }

  const numberBox:Box<number>={value:123}
  const stringBox:Box<string>={value:"hello"}

  console.log(numberBox)
  console.log(stringBox)



  // 4. Generics default

   // Custom Response interface with a default type of string
interface ApiResponse<T = string> {
  stat: number;
  data: T;
}

// Uses default <string>
const response1: ApiResponse = {
  stat: 200,
  data: "success",
};

// Explicitly sets <number[]>
const response2: ApiResponse<number[]> = {
  stat: 200,
  data: [1, 2, 3, 4, 5],
};

console.log(response1);
console.log(response2);



// 5. generics with class
 

class Container<T>{
    private content:T;
    constructor(content:T){
        this.content=content
    }
    getContent():T {
        return this.content;
    }
}

const stringContainer=new Container<string>("Hello, World!");
console.log(stringContainer.getContent());


// Generic with array

function getFirst<T>(arr:T[]):T{
    return arr[0];

}

const firstNumber=getFirst<number>([1,2,3,4,5])
const firstString=getFirst<string>(["apple","banana","cherry"])



console.log(firstNumber)
console.log(firstString)


function getProperty<T extends object,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key]

}

const prw={name:"ambuj",age:22}
const personName=getProperty(prw,"name")
console.log(personName)