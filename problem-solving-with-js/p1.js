// console.log(" Problem-Solving-with-JS")
//  // print a string and reverse a string ;
//    let str ="helloanil";
//    let lenght=str.length;
//    console.log(lenght);
   
//    let reverse= str.split('').reverse().join(' ');
//    console.log(reverse.toUpperCase());

//  //check palindrome
//  function ispalindrome(str1){
//     return str1===str1.split(' ').reverse().join(' ');
//  }
//  console.log(ispalindrome("madam"));
  
//  // null vs undefind;
//  let a=null;
//  let b;
//  console.log(typeof a)
//  console.log(typeof b)
//  console.log(a===b);

//  // array operation 
//  let arr=[23,34,44,[34,45,[45,45,67]]];


// let arr2=[23,23,34];
// let arr1=[12,34,56,67];
// let merge=[...arr1,...arr2];
// merge.push(23,34);
// merge.pop()
// merge.unshift(23,34,56);
// merge.shift(23)
// console.log(merge)
//  console.log(merge.length);

//  function getStringLength(str4) {
//   return str4.length;
// }

// console.log(getStringLength("JavaScript")); // 10

//1

// increment 

// var createCounter = function(n) {
    
//     return function() {
//         return n++;
//     };
// };
// const counter = createCounter(5);

// console.log(counter()); // 5
// console.log(counter()); // 6
// console.log(counter()); // 7

// //2
// //to be or  not to be
// var expect= function(val){
//   return {
//   toBe: function(other) {
//     if(val===other) return true;
//  throw new Error("Not Equal");


//   },
//   notToBe: function(other) {
//     if(val!==other) return true;
//  throw new Error("Equal");

//   }
// };

// };

// const test = expect(5);

// console.log(test.toBe(5));      
// console.log(test.notToBe(6));   

var createCounter = function(init) {
    
    let current =init;
    return{
        increment(){
        return ++current;
        },
        decrement(){
            return --current;

        },
        reset(){
            current =init;
            return current;

        }
    }
};

const count=createCounter(10)
console.log(count.increment());
console.log(count.decrement());
console.log(count.decrement());
console.log(count.decrement());
console.log(count.reset());


var map= function (arr,fn){
  result =[];
  for (i=0; i<arr.length;i++){
    result.push(fn(arr[i],i));
  }
  return result;
}

const arr = [1, 2, 3];

function plusfive(n) {
    return n + 5;
}

console.log(map(arr, plusfive));