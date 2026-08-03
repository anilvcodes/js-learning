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


let products = [
    {name:"Phone", price:20000, stock:true},
    {name:"Laptop", price:60000, stock:false},
    {name:"Watch", price:5000, stock:true}
];



let names = products.map(p => p.name);


let available = products.filter(p => p.stock);



let total = products.reduce((sum,p)=>sum+p.price,0);

let phone = products.find(p=>p.name==="Phone");


let sorted = products.sort((a,b)=>a.price-b.price);


console.log(names);
console.log(available);
console.log(total);
console.log(phone);
console.log(sorted);


