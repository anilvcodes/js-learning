// const num:Number=100;

// console.log(num);

function greet (firstName:string){
    console.log("hello" + firstName);

}
greet("anil");
// sum
function sum(a:number,b:number):number{
    return a+b;
}
let val=sum(5,5);
console.log(val);

// vote 
function age(num:number):boolean{
    if(num>=18){
        return true;
    }
    else{
        return false;
    }
}
let x=age(19);
console.log(x);

//obj
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 30,
};
console.log(`Name: ${user.name}, Age: ${user.age}`);
console.log(user);