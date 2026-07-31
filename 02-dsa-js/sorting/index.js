let fruits = ["banana", "apple", "mango", "orange"];

fruits.sort();

console.log(fruits);



let numbers = [10, 5, 2, 20, 1];

numbers.sort((a, b) => a - b);

console.log(numbers);



let numbers1 = [10, 5, 2, 20, 1];

numbers1.sort((a, b) => b -a );

console.log(numbers1);
let students = [
  { name: "John", age: 25 },
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 }
];

students.sort((a, b) => a.age - b.age);

console.log(students);


