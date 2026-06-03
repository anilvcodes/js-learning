let arr=[1,3,4,5,6,7];
console.log(arr);

//push at last
   arr.push(23,23)
   // remove last
   arr.pop()
   // remove strting 
   arr.shift();
// add starting
arr.unshift(23,45)
    console.log(arr);

    //map
   let num= arr.map(a =>a*5);
   console.log(num);
   //filter
   let even_num=num.filter(a=> a%2==0);
   console.log(even_num);

   // reduce
   let add= num.reduce((a,b)=> a+b ,0);
   console.log(add);



   const marks = [85, 90, 78, 92, 88];

// Find average
const average =
  marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

console.log("Average Marks:", average);

// find total using loop

let numbers = [10, 20, 30];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total); 




// object   
let obj ={
  name:"anil",
  age:23,
  profession:"software engineer"
}
 console.log(obj);

console.log(obj.name,obj.age,obj.profession);

const student = {
  name: "Aman",
  address: {
    city: "Lucknow",
    state: "UP"
  }
};

console.log(student.address.city);



const user = {
  _id: "u123",
  name: "Aman",
  email: "aman@gmail.com",
  role: "admin",
  createdAt: "2026-06-03",
  permissions: ["read", "write", "delete"],
  profile: {
    phone: "9876543210",
    city: "Lucknow"
  }
};

console.log(user);
console.log(user.profile.phone);