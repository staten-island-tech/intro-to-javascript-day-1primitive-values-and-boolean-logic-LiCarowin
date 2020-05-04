//challenge 1
let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
let result = students.filter(students => students.length < 5);
console.log (result);

//challenge 2 
let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
// console.log(students.includes("Junshen"));
let name1 = (element) => element === "Alan";
let name2 = (element) => element === "Savva"; 
console.log(students.some(name1));
console.log(students.some(name2)); 