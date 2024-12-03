
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let isOperatorPressed = false;

let screen = document.querySelector("p");
let number = document.querySelectorAll(".numbers");
let operation = document.querySelectorAll(".operators");
let buttons = document.querySelectorAll("button");
let sideops = document.querySelectorAll(".sideops");
const answerbutton = document.querySelector("#result");
answerbutton.addEventListener("click", operate);




for(const num of number){
num.addEventListener("click", (event)=> {

    if(!(firstNumber||secondNumber)){
        screen.textContent = "";
    }

    if (isOperatorPressed){
        secondNumber+=event.target.textContent;
        screen.textContent+=event.target.textContent;
        }
    else {
        firstNumber+=event.target.textContent;
        screen.textContent+=event.target.textContent;
        }
})
}

for(const op of operation){
    op.addEventListener("click", (event)=> {
        isOperatorPressed = true;
        operator = event.target.textContent;
        screen.textContent += event.target.textContent;
    })
}

function operate(){

    secondNumber=parseFloat(secondNumber);
    firstNumber=parseFloat(firstNumber);

    switch(operator){

        case "+": 
        result=firstNumber+secondNumber;
        break;
            
        case "-":
        result=firstNumber-secondNumber;
        break;

        case "/":
        if(secondNumber===0) {result="Ha! Nice Try"; break}
        result=firstNumber/secondNumber;
        break;

        case "*":
        result=firstNumber*secondNumber;
        break;
    }

screen.textContent="=" + result;
firstNumber = "";
secondNumber = "";
isOperatorPressed = false;
}

for(let side of sideops){
    side.addEventListener("click", (event) => {

        switch(event.target.textContent){

            case "AC": 
            screen.textContent="";
            firstNumber = "";
            secondNumber = "";
            isOperatorPressed = false;
            break;
                
            case "%":
            if(isOperatorPressed){
                secondNumber=parseFloat(secondNumber)/100;
                screen.textContent=secondNumber;
                }
            else {firstNumber=parseFloat(firstNumber)/100;   
                screen.textContent=firstNumber;
                }

            break;

            case ".":
            if(isOperatorPressed&&!secondNumber.includes(".")){
            secondNumber+= ".";
            screen.textContent=secondNumber;
                }
            else if(!isOperatorPressed&&!firstNumber.includes(".")){
            firstNumber += ".";
            screen.textContent=firstNumber;
                }
            break;
    
            case "+/-":
            if(isOperatorPressed&&!secondNumber.includes(".")){
            secondNumber=secondNumber*(-1);
            screen.textContent=secondNumber;
            }
            else if(!isOperatorPressed&&!firstNumber.includes(".")){
            firstNumber=firstNumber*(-1);
            screen.textContent=firstNumber;
            }
        }
    })   
;}
