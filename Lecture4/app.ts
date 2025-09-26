// !Function return type

function add(num1:number,num2:number):number
{
    return num1+num2
}
console.log(add(32,53));

function greet(name:string):void{
    console.log(`hi ${name}`)
 }


 let combineFunction :Function;

//  combineFunction=10 // invlid
// combineFunction=function(){} // valid
 combineFunction=add;
 console.log(combineFunction(3,5));



 // good practice

 let combineFunction2 :(a:number,b:number)=> number;

 function addHandle(num1:number,num2:number,cb:(n:number)=> void){
    const res=num1+num2;
    cb(res);
 }

 addHandle(10,20,(res:number)=>{
    console.log(`${res}`);
 })