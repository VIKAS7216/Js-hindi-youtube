// Primtive: Datatypes that are stored as value

// types: String, Number, Boolean, Null, Undefined, Symbol(for uniqueness),BigInt
const scoreValue = 100.3
const Name="Vikas"
const isLoggedIn = false
const outsideTemp = null
// type of null comes object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions
/* type of all reference is object 
and functions datatype comes function but it is called function object*/
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3