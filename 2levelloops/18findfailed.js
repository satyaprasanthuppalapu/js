//find failed students
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 65 },
    { name: "Eve", grade: 78 }
];
console.log("Total students:", students.length);
console.log("All students:", students);
let failedStudents = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].grade < 70) {
        failedStudents.push({ name: students[i].name, grade: students[i].grade});
    }
}
console.log("Failed students:", failedStudents);