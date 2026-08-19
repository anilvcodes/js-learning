// const x:number=1; 

// console.log(x);

// // function in ts 
// function greet(firstname:string){
//     console.log(`hello namste ${firstname}`)
// }
// greet("anil ")

//  function add(num1:number,num2:number)  {
//     return num1+num2;
//  }
//  console.log(add(34,45));

//  //avg find in ts 
//  function avg(num1:number , num2:number,num3:number){
//     return (num1+num2+num3)/3;
//  }
//  console.log(avg(25,25,25));

//  // age greater than 18 or not 

//  function ageGreater(age:number) :boolean
//  {
//     if(age>18){
//       return true;
//     }
//     else{
//         return false;
//     }
//  }
//  let age = ageGreater(7);
//  console.log(age);

//interface
interface User{
   firstName:string;
   lastName:string;
   age:number;
   email?:string;
}

function isLegal(user:User){
   if (user.age>18){
      return true;
   }else{
      return false
   }
}
function greet(user:User){
   console.log("hi there "+ user.firstName+ user.age);

}


console.log(isLegal({
   firstName:"anil",
   lastName:"veerma",
   age:20
}))
greet({
   firstName:"anil",
   lastName:"veerma",
   age:20})