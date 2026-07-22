console.log(" Problem-Solving-with-JS")
 // print a string and reverse a string ;
   let str ="helloanil";
   let lenght=str.length;
   console.log(lenght);
   
   let reverse= str.split('').reverse().join(' ');
   console.log(reverse.toUpperCase());

 //check palindrome
 function ispalindrome(str1){
    return str1===str1.split(' ').reverse().join(' ');
 }
 console.log(ispalindrome("madam"));
  
 // null vs undefind;
 let a=null;
 let b;
 console.log(typeof a)
 console.log(typeof b)
 console.log(a===b);

 // array operation 
 let arr=[23,34,44,[34,45,[45,45,67]]];


let arr2=[23,23,34];
let arr1=[12,34,56,67];
let merge=[...arr1,...arr2];
merge.push(23,34);
merge.pop()
merge.unshift(23,34,56);
merge.shift(23)
console.log(merge)
 console.log(merge.length);

 function getStringLength(str4) {
  return str4.length;
}

console.log(getStringLength("JavaScript")); // 10
