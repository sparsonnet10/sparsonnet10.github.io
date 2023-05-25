console.log("this is some script from an external script element")

const divBtn = document.querySelector(".divBtn");
const divBtnListener = divBtn.addEventListener('click', outFunction)

// let <-- a variable that we can change later in the code 
//const <-- a constant 
//var <-- deprecated, functions as a let 

//querySelector <-- lets us select an elemenet based on some information 
//querySelectorAll <-- selects all instances of an element based on some selector

// addEventListener <-- lets us look for a specific action to occur on an element we've selected 

function outFunction() {
    console.log("button pressed!")
}

let number = 2;  
let number2 = 4; 
console.log(number+number2)

let name1 = "sophie"; 
console.log(name1); 

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("heading_A");

//console.log(buttonA)
//console.log(headingA)

buttonA.onclick = () => {
    const name2 = prompt ("what is your name?");
    alert(`Hello ${name2}, nice to meet you!`);
    headingA.textContent = `Welcome ${name2}`; 
    //headingA.textContent="You pressed the button"; 
    //console.log(name2)
}

// booleans 
let eval = true; 
console.log(6>3)

//lists 
let myNumberArray = [1, 2, 3, 4, 5]; 
console.log(myNumberArray[1]);

//objects 
let dog = { name: "burton", breed: "bulldog"}; 
console.log(dog.breed);

// math 
let x = 1
console.log(x)
x ++; 
console.log(x)
x --; 
console.log(x)

// == checks if two things are the same 
// === checks if two things re the same (strictly)

console.log(2 == 2.0); 
console.log(2 === 2.0); 

// strings 
let string3 = "hello";
let string4 = "bill"; 
console.log(string3+string4)

let string5 = "The score was:"; 
let score = "50"; 
console.log(string5 + score); 

// toString converts from num to string 
// Number() converts from string to number 

console.log(string5.length); 
console.log(string5[2]);
