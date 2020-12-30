//var,let, const = These are all variables
//console.log("Hello World");

//Strings, Numbers, Boolean, Null, undefined, symbols = Data types

const name = "John";
const age = 30;
/*const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; 

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x); //Null is an Object error
console.log(typeof y);
console.log(typeof z); */

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String = the same as concatenation
console.log(`My name is ${name} and I am ${age}`);
//adding a variable
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

//******************************** */
const s = 'Hello World';
const t = 'technology, computers, it, code';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5));
console.log(s.split(''));
console.log(t.split(', '));

// Arrays = variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples','oranges','pears'];
console.log(numbers);
fruits[3] = 'grapes' // adding "grapes to the end of the array"
fruits.push('mangos'); // .push will add on at the end of the array
fruits.unshift('strawberry'); // .unshift will add at the beginning
fruits.pop(); // will take off the last index (mangos)

console.log(Array.isArray(fruits)); //check to see if it is an array
console.log(fruits);
console.log(fruits.indexOf('oranges')); // 2 is the index of oranges
console.log(fruits[1]);

// Oject literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies','sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
// destructuring
const {firstName,
lastName, address: {city}} = person;
console.log(city);

// add properties
person.email = 'john@gmail.com'
console.log(person);

//todos
const todos = [
 {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
 },
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
 },
{
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
 }
];
console.log(todos);
console.log(todos[1].text);

//JSON 
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For Loop
for(let i = 0; i < 10; i++) { //the loop will run until the condition (i < 10) is true.
console.log(i);
console.log(`For Loop Number: ${i}`);
}
// While Loop
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Loop through an Array
for(let i = 0; i < todos.length; i++) { //the loop will run until the condition (i < todos.length) is true.
    console.log(todos[i].text);
}

// For Of Loop
for(let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text);
});
//map
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);
// filter
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
})
console.log(todoCompleted);

//Conditionals (if, else, else if statement)
const x = 4;
if(x === 10) {
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

// Switch Statement
const Sw = 9;
const color = Sw > 10 ? 'red' : 'blue';
switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
// functions
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(1, 1); //this is the call to function

function addNums2(num1 = 1, num2 = 2) {
    return num1 + num2;
}
console.log(addNums2(5, 5));

// Arrow function
/*const addNums3 = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}
console.log(addNums3(5, 5)); */
const addNums3 = (num1 = 1, num2 = 1) => console.log(num1 + num2)

addNums3(5, 10);
/*
//Contructor function
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);  //adding the date constructor 
   /* this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    } 
    Person.prototype.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    } */

//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970')

console.log(person2.getFullName());
console.log(person1);


