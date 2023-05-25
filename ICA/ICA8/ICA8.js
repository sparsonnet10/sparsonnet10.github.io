console.log("this is some script from an external script element")

const divSquare = document.querySelector(".divSquare");
const divBtnListener = divSquare.addEventListener('click', outFunction)

function outFunction() {
    console.log("button pressed!")
}

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("heading_A");

buttonA.onclick = () => {
    const name2 = prompt ("what is your name?");
    alert(`Hello ${name2}, welcome to Welcome to Wonderland`);
    //headingA.textContent = "Welcome $(name2)"; 
}

alert("this is a message"); 

