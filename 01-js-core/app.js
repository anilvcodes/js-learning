// student management 

let students =[];

function addStudent(name,marks){
    let student={
        name:name,
        marks:marks
    };

    students.push(student);
    console.log(`${name} added sucessfully`)

}

function calculateAverage(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total / marks.length;
}
function checkResult(average) {

    if (average >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }

}

addStudent("Rahul", [80, 70, 90]);
addStudent("Amit", [30, 45, 35]);
addStudent("Priya", [95, 85, 90]);
addStudent("Rahul", [80, 70, 90]);
addStudent("Amit", [30, 45, 35]);
addStudent("Priya", [95, 85, 90]);


for (let i = 0; i < students.length; i++) {

    let student = students[i];

    let average = calculateAverage(student.marks);

    let result = checkResult(average);


    console.log("--------------------");
    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", average);
    console.log("Result:", result);
}