
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

// let password="Annie@1234";
// if(password==="Annie@122334"){
//    console.log("login");
//   }
// else{
//    console.log("incurrect pass");
// }

//find avg of three

// let n1=35;
// let n2=24;
// let n3=80;
// let avg=(n1+n2+n3)/3;
// console.log(avg);


// greated in three num find

// if(n1>n2 && n1>n3){
//    console.log(" n1 is greater ")
// }
// else if(n2>n1 && n2>n3){
//    console.log("n2 greater ")

// }
// else {
//    console.log("n3 is greater ")
// }

//for array 

// let arr=[1,2,4,5,6,7];
// for( let value of arr){
//    console.log(value);
// }

// let obj={
//    name:"anil",
//    age:25
// }
// for(let objVal in obj){
//    console.log( objVal ,obj[objVal]);
// }

// let users = [
//    { name: "Anil", age: 25 },
//    { name: "Rahul", age: 30 },
//    { name: "Neha", age: 22 }
// ];

// for (let user of users) {
//    console.log(user.name, user.age);
// }



// 1 to 10 print
// Sum of 1 to n
// Multiplication table
// Even numbers print


// let num=1;
// for(num;num<=10;num++){
//    console.log(num);

// }

// let num=1;
// let sum=0;
// for(num;num<=2;num++){
  
//   sum=sum+num;
 
// }
//  console.log(sum);

// let num=1;

// for(num;num<=100;num++){
//   if(num%2===0){
//    console.log(num);
//   }
 
 
// }


//  let num=1;
// let table=5;
// for(num;num<=10;num++){
  
// let res = num*table
//  console.log(res);
// }
 


// let num=100;
// for(num; num>=1;num--){
//    console.log(num);
// }











//function
// Function to add numbers
// Square function
// Greeting function
// Max of 2 numbers
// Even/odd function
// Medium
// Prime checker function
// Palindrome function
// Factorial function
// Celsius converter function
// Calculator function


// reusable block of code call function 
 // argument and parameter 

// function add(a,b) {
//    return a+b;

// }
// console.log(add(5,6));
// console.log(add(6,6));


// default perameter 

// function greet(greeting="good morning" ,name){
//    return `${greeting} ,${name }`
// }
// console.log(greet("good evening" , "anil"));
// console.log(greet("good evening" , "annie "));
// arrow function
// const greet=(app)=> {
//    return app;
// }
// console.log(greet("myapp"));

// const namsteJs= namste => namste;
// console.log(namsteJs("learning function in js arrwo function"))

// find squar

// function squar(a,b){
//    return a**b;

// }
// console.log(squar(8,2));
// console.log(squar(2, 3)); // 8
// console.log(squar(5, 2)); // 25
// console.log(squar(10, 0));

// function isPalindrome(value){
//    let str= value.toString();
//     let reversed = str.split('').reverse().join('');

//     return str === reversed
//         ? "Palindrome"
//         : "Not Palindrome";
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome(121));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome(123));

//array





// let arr=[1,2,3,5,7,9];
// console.log(arr);
// console.log(arr.length);
// arr.push(34);


// arr.pop();

// arr.shift();
// console.log(arr);
// arr.unshift(51);
// console.log(arr);
//  let arr=[12,13,14,15,16,17,18,19];
//  let max_arr=arr[0]
// //  console.log(arr.length);
//  for(let i=0 ; i<arr.length;i++){
//    if(arr[i]>max_arr){
//       max_arr=arr[i];
//    }

//    // console.log(arr[i]);
//  }
//  console.log(max_arr);

//  // find min in array 

//  let arr2=[1,2,3,4,5,6,7,8,9];
//  let min_arr =arr2[0];
//  for(let j=0; j<arr2.length;j++){
//    if(min_arr>arr2[j]){
//       min_arr= arr2[j]
//    }

//  }
// console.log(min_arr);




// sum of array 
// let arr=[12,12,13,13,24,26,28,18,80]
// console.log(arr.reverse());
// let sum=0;
// for(let i=0;i<arr.length; i++){
//    sum=sum+arr[i];
// }
// console.log(sum);

let arr=[12,12,13,13,24,26,28,18,80]
let unique_arr=[...new Set(arr)];  //[...new Set(arr)];
console.log(unique_arr);

let count_even=0;
for(let i=0;i<arr.length; i++){
   if(arr[i]%2===0){
      count_even++;
   }
}
console.log(count_even);