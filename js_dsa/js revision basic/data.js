
//var is function-scoped, not block-scoped.

// var myname = "anil kumar verma ";
// var age= 23;
// var profession = " engineer "
// console.log(`my name is ${myname}and my age is ${age}  i am working as software engineer ${profession}`);
// var myname= "anil ";
// console.log(myname );

// var my_age=24;
// console.log(my_age);

// Hoisting in var

// Variables declared with var are hoisted and initialized with undefined.

// Example
// console.log(a); // undefined

// var a = 10;

// JavaScript internally treats it like:

// var a;
// console.log(a);

// a = 10;


// Block Scope

// let is block-scoped. 


// let user_name="anil k verma";
// let user_age =25;
// console.log(user_name);
// console.log(user_age);
// let use1r_name="anna verma";
// console.log(use1r_name);
// let num=5;
// console.log(num);
//  const pi=3.4123;
//  console.log(pi);
//  let pi_=3.4123;
//  console.log(pi_);

// let my_name ="anil k verma ";
// my_name="anil verma ";
// console.log(my_name)

// Hoisting with let

// let is hoisted but stays in the Temporal Dead Zone (TDZ) until declaration.

//  console.log(my_name );
//  let my_name="anil k verma";




// {
//     // TDZ starts

//     let x = 10;

//     // TDZ ends
//     console.log(x);
// }
 

// let name = "Anil";          // String
// let age = 25;               // Number
// let isStudent = true;       // Boolean
// let data = null;            // null
// let x;                      // undefined

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof data);
// console.log(typeof x);

// Apna naam variable me store karo
// 2 numbers add karo
// User ki age print karo
// Boolean variable banao
// typeof use karo
// let name ="anil kumar verma";
// console.log(name);
// console.log(typeof name );
// let age =25;
// console.log(age);
// console.log(typeof age);
// let num1=25;
// let num2=25;
// let sum=num1+num2;
// console.log(sum);
 
// let isture=true;
// console.log(isture);
// console.log(typeof isture);


// let num1=25;
// let num2=34;
// let num3=34;
// let avg=(num1+num2+num3)/3;
// console.log(avg);

// let str='my anme is ';
// let str2='anil k verma';
// let str3= ' i a wordpress developer learning mern with my mentor atul soni .'
// let santances=`${str} ${str2} ${str3}`;
// console.log(santances);
// console.log(santances.length);

// let length = 10;
// let beadth = 5;

// console.log( length*beadth );


// conditionals 
//  let age=23;
//  if(age>18){
//     console.log("you cam vote ")
//  }
//if else if  else 

   // let mark=85;
   // if (mark>90){
   //    console.log("a")
   // }
   // else if ( mark>60){
   //    console.log('b')
   // }
   // else if (mark>40){
   //    console.log("c")

   // }
   // else {
   //    console.log("fail")
   // }



   //ternery opreator


   // let age=25;
   // let result=(age>18)? "you can ride ": "YOU CAN NOT RIDE "
   // console.log(result);

   // let mark=30 ;
   // let passingMark=(mark>33)? "you can pass": "fail";
   // console.log(passingMark);



   //loop
// let num=1
//    for( num ;num<=10;num++){
//       console.log(num);
//    }



//    let rev=100;
//    for(rev;rev>=1; rev--){
//       console.log(rev);
//    }

//  for (let i=1 ;i<=5;i++){
//        for(let j=1 ; j<=10 ;j++){
//          console.log( i, j )
//        }
      

//  }

// finde even odd 
// let num=13;
// if(num%2===0){
//    console.log("even")

// }
// else{
//    console.log("odd")
// }

//prinnt even 1-100
// let num=1;
// for (num ;num<=100;num++){
//    if(num%2===0){
//       console.log(num)
//    }
   
// }

let password="Annie@1234";
if(password==="Annie@122334"){
   console.log("login");
  }
else{
   console.log("incurrect pass");
}