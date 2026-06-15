// synchronous 

console.log("hello world");
for(let i=1;i<=20;i++){
    console.log(i);
}
console.log("hello end ");

// asynchronous
console.log("hello listen");
  setTimeout(()=>{
    console.log("task1")
  },1000);
   setTimeout(()=>{
    console.log("task2")
   },3000);

setTimeout(()=>{
console.log("task")
},500);
setTimeout(()=>{
console.log("task")
},5000);

console.log("hello end " );
