// console.log(" array");
//  let arr= [12,23,56,45,4578];
//  console.log(arr.length);
//  console.log(arr);
//  for(let i=0; i<=arr.length; i++){
//     console.log(arr[i]);

//  }

 // flat

let arr2 = [
  12, 34, 56,
  [345, 45],
  [45, 34, 56, [45, [67, 67, 78], 67], 78, 54],
  89, 90
];

console.log(arr2.flat());

console.log(arr2.flat(Infinity));

