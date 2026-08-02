let arr = [10, 20, 30, 40, 50];


console.log(arr[0]);
console.log(arr[1])
arr.push(23,23);
console.log(arr);

arr.shift();
arr.pop();
console.log(arr);

for(let i=0 ; i<arr.length;i++){
    console.log(arr[i]);
}
let result = arr.map((value) => {
    return value * 5;
});
console.log(result);