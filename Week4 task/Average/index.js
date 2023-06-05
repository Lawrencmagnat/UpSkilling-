let numbersArray = [];

function addNumber() {
  const numberInput = document.getElementById('numberInput');
  const number = Number(numberInput.value);
  
  // Check if the input is a valid number
  if (!isNaN(number)) {
    numbersArray.push(number);
    numberInput.value = '';

    updateNumbers();
    calculateAverage();
  }
}

function deleteLastNumber() {
  numbersArray.pop();
  updateNumbers();
  calculateAverage();
}

function clearNumbers() {
  numbersArray = [];
  updateNumbers();
  calculateAverage();
}

function reset() {
  const numbersElement = document.getElementById('numbers');
  const averageElement = document.getElementById('average');
  
  numbersArray = [];
  numbersElement.textContent = '';
  averageElement.textContent = '';
}

function updateNumbers() {
  const numbersElement = document.getElementById('numbers');
  numbersElement.textContent = 'Numbers: ' + numbersArray.join(', ');
}

function calculateAverage() {
  const averageElement = document.getElementById('average');
  const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbersArray.length;

  if (isNaN(average)) {
    averageElement.textContent = 'Average: N/A';
  } else {
    averageElement.textContent = 'Average: ' + average.toFixed(2);
  }
}
