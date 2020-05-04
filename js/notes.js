/* 
/////////Data Types "Strings"

let string = "string"; //Strings can be stated with either single quotes
const edis = "Edis"; //double quotes or with back ticks
//Combining Strings
let sentence = "Hello " + "Vicky";
let sentence2 = " and also Angel";
//let combine = sentence + sentence2;
let combine = `${sentence}${sentence2}` ; //ES2015

let student1 = "Sandra"
let student2 = "Kelly"
let courseName = "AP CSP"
let teacherName = "Whalen"
// const LongerSentence =
    student 1 +
    " and " +
    student2 +
    " are amazing and will be taking " +
    courseName +
    " next year with " +
    teacherName;

console.log(LongerSentence); //

let longSentence = `${student1} and ${student2} will be taking 
${courseName} with ${teacherName} next year`;
console.log(longerSentence); 
*/

/* 
/////////////////Primitive Data Types:Integers

let year = 2020;
let nextYear = 2020 + 1;
console.log(nextYear);
let past = year / 2;
let lastYear =  year - 1;
let farFuture = year * 100;
console.log(past, lastYear, farFuture);
*/

/*
////////////////Booleans, Null, Undefined
//let trueStatement = true;
let falseStatement = false;

let undefinedVar;//
//console.log(undefinedVar); //do this a lot
//console.log(nonExistent); //null never declared
//console.log(truuStatement);

///if/ else if statemetns
//let student = "Karen"
//let age = 17;
// console.log(student ==="Karen"); //true
// console.log(student ==="karen"); //false
// console.log(student =="karen"); //false
//console.log(age ==="17"); //false
//console.log(age =="17"); //true

//let age = 16;
//let name = "Kristy";
//console.log(age < 17);
console.log(age <= 17);
console.log(age >= 17);//
//console.log(age == 16 || age == 17 ); //if age equals 16 OR age equals 17 then true
//console.log(age == 16 && age == 17);
//console.log(age == 16 && name === "Kristy");
//console.log(age !== 1);

////////////////If statements
// let age = 17;
if (age < 18){
    console.log("You are a child")
}  else if (age >= 18){
    console.log("You are an adult now");
} //
let school = "elementary";
if(school == "elementary") {
    console.log("You are in elementary school");
}   else if (school == "middle") {
    console.log("You are in middle school");
}   else {
    console.log("You are in high school");
} */

//////////Functions
/* function test() { //scope of the function or what occurs when the funtion runes
    console.log("I am a function");
}
test(); //calling the function
 */
/* function argument(argument){
    console.log(argument);
}
//argument("Edis");
function add(x, y){
    return x + y; //return ends the function
}
//console.log(add (2, 7));
let z = function add(x, y){
    return x + y; //return ends the function
}
z(1, 11);
console.log(z(1, 11);) */

///////////Scoping
//let x = "x";
//const z = "z"; //cannot redefine with const, use const 99% of the time
/* const hello = function (){
    alert("hello";)
};
const bye = function (){
    alert("bye");
    alert("bye");
    alert("bye");
    alert("bye");
    alert("bye");
    alert("bye");
    alert("bye");
};

function beatles{
    hello();
    bye();
    hello();
    bye();
}
beatles(); */

//global or window scope
/*function makeFunc () {
    //function scope
    const name = "Sun";
    console.log(name);
}
 function hello (){
    const name = "Jaiyu";
    console.log(name);
}
hello();
makeFunc(); */

/* function makeFunc () {
    //function scope
    const name = "Sun";
    function displayName(){
        alert(name); //still has access to out variable name
    }
    return displayName; //returning the unner function
}

const myFunc = makeFunc ();
myFunc(); */

////////Arrays
/* const names = ["Michelle", "Edis", "Richard", "Vincent", "Gisele"]; //starts from zero
// const Gisele = names.slice(-1);
         //Arrow functions and methods

 names.forEach(name => console.log (name)); */
//arrow function 1) Always returned 2) this is changed

//////////Spread Operator ready?
/* const numbers = [1, 2, 3];
const add = function (x,y,z) {
    return x + y + z;
};
console.log(add(...numbers)); */
const numbers = [1, 50 , 34, 75, 11];
const biggestNum = Math.max(...numbers);
console.log(biggestNum);