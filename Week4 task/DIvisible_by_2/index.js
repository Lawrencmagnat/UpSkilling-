function checkDivisibility() {
    const numberInput = document.getElementById('numberInput');
    const divisor1Input = document.getElementById('divisor1Input');
    const divisor2Input = document.getElementById('divisor2Input');
  
    const number = Number(numberInput.value);
    const divisor1 = Number(divisor1Input.value);
    const divisor2 = Number(divisor2Input.value);
  
    let resultMessage = '';
  
    if (isNaN(number)) {
      resultMessage = 'Invalid input for the number. Please enter a valid number.';
    } else if (isNaN(divisor1)) {
      resultMessage = 'Invalid input for divisor 1. Please enter a valid number.';
    } else if (isNaN(divisor2)) {
      resultMessage = 'Invalid input for divisor 2. Please enter a valid number.';
    } else if (number === 0) {
      resultMessage = 'Cannot divide by zero. Please enter a positive, non-zero number.';
    } else if (divisor1 === 0) {
      resultMessage = 'Cannot divide by zero. Please enter a positive, non-zero divisor 1.';
    } else if (divisor2 === 0) {
      resultMessage = 'Cannot divide by zero. Please enter a positive, non-zero divisor 2.';
    } else {
      let message1 = '';
      let message2 = '';
  
      if (number % divisor1 === 0) {
        message1 = `${divisor1} is divisible by ${number}.`;
      } else {
        message1 = `${divisor1} is not divisible by ${number}.`;
      }
  
      if (number % divisor2 === 0) {
        message2 = `${divisor2} is divisible by ${number}.`;
      } else {
        message2 = `${divisor2} is not divisible by ${number}.`;
      }
  
      const divisibleNumber = number % divisor1 === 0 ? divisor1 : divisor2;
      const question = `Is ${divisibleNumber} divisible by ${number}?`;
    //   const answer = divisibleNumber % number === 0 ? 'Yes' : 'No';
      const divisionResult = number / divisibleNumber;
  
      resultMessage = `${message1} ${message2} 
      ${number} divided by ${divisibleNumber} is ${divisionResult}.`;
    //   Here we logically expalined the divison scale and logic;
    }
  
    setResult(resultMessage);
  }
  
  function setResult(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
  }
  