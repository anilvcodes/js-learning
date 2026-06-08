console.log(" here we learn OOP in js !")

//object 

let student={
    name:"anil k verma ",
    age:22,
}
console.log(student.name);


//obj have function too
let student2={
    name:"anil k verma ",
    age:22,
    greet(){
        
        console.log("hello")
    }
}
console.log(student2.name)
student2.greet();
console.log(student2.greet());

// when we need 100 student so num of code repeteaton are increase ! so here come calss