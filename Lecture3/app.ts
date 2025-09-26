
// UNION   ---> PIPE IN Typescript
// Literal Types
// TYPE ALIAS/ SURTOM TYPES


// LITERAL TYPES
function combine(num1 : string | number ,num2 : string |number){
    let result;
    if(typeof num1==="number" && typeof num2==="number"){
        result=num1+num2;
    } 
    else{
        result=num1.toString()+num2.toString();
    }
    
    return result;

}

const sum=combine(10,50);
const comb=combine("mansi","rai");
console.log(sum,comb);



// !LITERAL TYPES ---> khud ka type
function combine2(num1 : string | number ,num2 : string |number,conversionType:"as-number"| "as-string"){
    let result;
    if(typeof num1==="number" && typeof num2==="number" || conversionType==="as-number"){
        result=+num1 + +num2;
    } 
    else{
        result=num1.toString()+num2.toString();
    }
    
    return result;

}

const sum2=combine2(10,50,"as-number");

const sum3=combine2(10,"50","as-number");

const comb2=combine2("mansi","rai","as-string");
console.log(sum,comb,sum3,sum2);




// TYPE ALIAS/ CUSTOM TYPE

type combinable =number|string
type convertableType="as-number"| "as-string"
function combine3(num1 : combinable ,num2 :  combinable,conversionType:convertableType){
    let result;
    if(typeof num1==="number" && typeof num2==="number" || conversionType==="as-number"){
        result=+num1 + +num2;
    } 
    else{
        result=num1.toString()+num2.toString();
    }
    
    return result;

}

const sum4=combine3(10,50,"as-number");

const sum5=combine3(10,"50","as-number");

const comb3=combine3("mansi","rai","as-string");
console.log(comb3,sum4,sum5);



type User={
    name:string;
    age:number;
    skills:string[];
}

const user:User={
    name:"mnh",
    age:34,
    skills:["react","Node"]
}

function greet(user :User){
    console.log(`hello sir ${user.name}`);
}
greet(user)

