// number,string,boolean

// function add(num1,num2){
//     if(typeof num1 ==='number' || typeof num2 ==='number')
//     return n1+n2;
// else{
//     return +num1 + +num2;
// }
// }

function add(num1:number,num2:number){
    return num1+num2;
}
const n1="12";
const n2=30;

const result=add(n1,n2);
console.log(result);