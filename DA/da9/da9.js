const adviceButton = document.querySelector("#js-new-quote"); 
//console.log(button); 

const adviceBtnClick = adviceButton.addEventListener('click',newAdvice); 
const answerButton = document.querySelector('#js-answer-btn');



const endpoint = "https://api.adviceslip.com/advice";

var jsonData = '';

async function newAnswer() {
    const output = await newAdvice();
    console.log(output);

    const quoteText = output('advice'); 
        const quoteArea = document.querySelector("#js-quote-text");
        quoteArea.textContext = quoteText;
};

async function newAdvice() {
    //console.log("BUTTON PRESSED!");
    try {
        const response = await fetch (endpoint);
        console.log(response)
        if (!response.ok) {throw Error (response.statusText);
        }

        jsonData = await response.json();
        console.log(jsonData["slip"]["advice"])
    
        const quoteText = jsonData['slip']['advice']; 
        //console.log(quoteText)
        const quoteArea = document.querySelector("#js-quote-text");
        quoteArea.textContent = quoteText;
    }
    catch (err) {
        console.log(err)
        alert("FAILED");
    }
}
