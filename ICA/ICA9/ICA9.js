const questionButton = document.querySelector("#js-new-quote"); 
//console.log(button); 

const questionBtnClick = questionButton.addEventListener('click', newQuestion); 

const answerButton = document.querySelector('#js-answer-btn');
const answerBtnClick = answerButton.addEventListener("click", giveAnswer);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function newTrivia() {
const answerArea = documdnt.querySelector('js-answer-text'); 
answerArea.textContent = ''; 
try {
var response = await fetch(endpoint); 
if (!response.ok) {
    throw Error(response.statusText)
}

jsonData = await response.json();

const quoteText = jsonData('question'); 
const quoteArea = document.querySelector('#js-quote-text'); 
quoteArea.textContent = quoteText;
}

const quoteText = output('question'); 
        const quoteArea = document.querySelector("#js-quote-text");
        quoteArea.textContext = quoteText;
};

catch (err) {
        console.log(err)
        alert("FAILED");
    };
//  IN CLASS LEARNT THIS BUT HE CORRECTED IT 

//async function newTrivia() {
    //console.log("BUTTON PRESSED!");
    //try {
       // const response = await fetch (endpoint);
       // console.log(response)
       // if (!response.ok) {throw Error (response.statusText)
       // }
        //console.log(response); 
        //const jsonData = await
        //response.json();
        //console.log(jsonData['question']); 
        //console.log(jsonData['answer']); }
        //const quoteText = jsonData['question']; 
        //const quoteArea = document.querySelector("#js-quote-text");
        //quoteArea.textContent = quoteText;
    //}
   

async function giveAnswer() {
    const answerText = jsonData['answer']; 
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = answerText;
}

