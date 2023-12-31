//Step 1 - selecting all the element
var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stocks-quanity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');


// ex06
submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

// Ex05
function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);
    } else {
        showOutput(`Never give up no give up`);
    }
}

function showOutput(message) {
    // switch (s) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
    outputBox.innerHTML = message;
}

