function filterNumbers() {
    const numbersInput = document.getElementById('numbersInput');
    const numbersString = numbersInput.value;
    const numbersArray = numbersString.split(',').map(Number);

    const positiveNumbers = numbersArray.filter(num => num > 0);
    const negativeNumbers = numbersArray.filter(num => num < 0);

    displayResult('positiveResult', positiveNumbers);
    displayResult('negativeResult', negativeNumbers);
}

function displayResult(elementId, numbers) {
    const resultElement = document.getElementById(elementId);
    resultElement.textContent = numbers.join(", ");
}

function reset() {
    const numbersInput = document.getElementById('numbersInput');
    const positiveResult = document.getElementById('positiveResult');
    const negativeResult = document.getElementById('negativeResult');

    numbersInput.value = '';
    positiveResult.textContent = '';
    negativeResult.textContent = '';
}
function reset() {
    const numbersInput = document.getElementById('numbersInput');
    const positiveResult = document.getElementById('positiveResult');
    const negativeResult = document.getElementById('negativeResult');

    numbersInput.value = '';
    positiveResult.textContent = '';
    negativeResult.textContent = '';
}

let numbersArray = [];

function deleteLastNumber() {
    const numbersInput = document.getElementById('numbersInput');
    const numbersString = numbersInput.value;

    if (numbersString.length > 0) {
        numbersArray = numbersString.split(',').map(Number);
        numbersArray.pop();
        numbersInput.value = numbersArray.join(',');
    }
}



