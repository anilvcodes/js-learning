console.log("promis here")

function show(){
    console.log("i am inside a function");
}
setTimeout(function(){
    show();
},2000);

setTimeout(show,2000);
setTimeout(function show(){
    console.log("i am inside a function");
},2000);