const questionButton = document.querySelector("#js-new-quote"); 
//console.log(button); 

const questionBtnClick = questionButton.addEventListener('click', newQuestion); 

const answerButton = document.querySelector('#js-answer-btn');
const answerBtnClick = answerButton.addEventListener("click", giveAnswer);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function newQuestion() {
    const output = await newTrivia();
    console.log(output);

    const quoteText = output('question'); 
        const quoteArea = document.querySelector("#js-quote-text");
        quoteArea.textContext = quoteText;
};


async function newTrivia() {
    //console.log("BUTTON PRESSED!");
    try {
        const response = await fetch (endpoint);
        console.log(response)
        if (!response.ok) {throw Error (response.statusText)
        }
        //console.log(response); 
        const jsonData = await
        response.json();
        //console.log(jsonData['question']); 
        //console.log(jsonData['answer']); }
        const quoteText = jsonData['question']; 
        const quoteArea = document.querySelector("#js-quote-text");
        quoteArea.textContent = quoteText;
    }
    catch (err) {
        console.log(err)
        alert("FAILED");
    }
}

async function giveAnswer() {
    const answerText = jsonData['answer']; 
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = answerText;
}

