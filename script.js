"use strict"
var buttons = document.getElementsByClassName('btn');
var displayContent = document.getElementById('display-content');
var displayResult = document.getElementById('display-result')

let preVal = "";
for(var i = 0 ; i<buttons.length; i++){
    function evalResult(){
        var value = this.getAttribute('data-value');
        var result = 0;
        switch(value){
            case 'AC':
            displayContent.innerText = "";
            displayResult.innerText = "";
            break;

            case '%':
            displayContent.innerText += value;
            result = parseFloat(preVal)/100;
            console.log(result);
            displayResult.innerText = result;
            break;

            case '+/-':
            var lastOpd = preVal.slice(-1);
            var replaced = preVal.slice(0,-1) + `(-${lastOpd})`;
            displayContent.innerText = replaced;
            result = eval(displayContent.innerText);
            displayResult.innerText = result;
            console.log( result+"Result");
            break;

            case '=':
            result = eval(displayContent.innerText);
            displayResult.innerText = result;
            console.log(result+"  Result");
            break;

            default:
            displayContent.innerText += value;
            preVal = displayContent.innerText;
        }
    };
    buttons[i].addEventListener('click', evalResult);
}