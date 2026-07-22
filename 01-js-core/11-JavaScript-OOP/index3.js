
class Student {
  constructor(name) {
    this.name = name;
  }
}
  function createName(name){
    return new Student(name)

  }
//without new
let s_1=createName("anil");
console.log(s_1);
// with new 
let s_2= new Student("kumar");
console.log(s_2)


 // if multiple value 
 class myData
 { 
    constructor(name, branch, age ){
    this.name=name;
    this.branch=branch;
    this.age=age;

 }
}
function newdata(name,branch,age) {
    return new myData(name,branch,age);
}

let datawithoutnew=newdata("anil ","computer science", 23);
console.log(datawithoutnew);
let data=new myData("anil","cse",23);
console.log(data);