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

// when we need 100 student so num of code repeteaton are increase ! so here come calss

//constructure 

class student_class{
    constructor(name ,age){
        this.name=name;
        this.age=age;
    }
}
const s2= new student_class("rahul k mitra",25)  // create obj in class
console.log(s2);

class product{
    constructor(p_name,p_quantity,p_price ){
        this.p_name=p_name;
        this.p_quantity=p_quantity;
        this.p_price=p_price;
    }
}
// const product1= new product("laptop",25 ,250000);
// const product2= new product("top",25 ,250000);
// const product3= new product("mobile",25 ,250000);
// const product4= new product("lap",25 ,250000);
// let totalprice=(product1.p_price+product2.p_price+product3.p_price+product4.p_price);
// console.log(totalprice);
// console.log(product1,product2,product3,product4);

let product_arr=[
      new product("laptop",25 ,250000),
      new product("top",25 ,250000),
      new product("mobile",25 ,250000),
      new product("lap",25 ,250000),
];
 let totalprice = product_arr.reduce((sum,item)=> sum+item.p_price,0);
 console.log(totalprice);
 console.log(product_arr[0].p_name);

// this 



class Student {
  constructor(name) {
    this.name = name;
  }
}


//Each object has its own data.

//These are called instance properties.
const s_1 = new Student("Rahul");
const s_2 = new Student("anil");
const s_3 = new Student("annie");
console.log(s_1.name,s_2.name,s_3.name);
// instance method
class StudentAp {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}
const stu = new StudentAp("Rahul");
stu.greet();


//PROTOTYPES