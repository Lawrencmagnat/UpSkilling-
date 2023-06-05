function checkPrime() {
    const numberInput = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');
  
    const number = Number(numberInput.value);
    if (isNaN(number)) {
      resultElement.textContent = 'Invalid input. Please enter a number.';
      return;
    }
  
    if (isPrime(number)) {
      resultElement.textContent = number + ' is a prime number.';
    } else {
      resultElement.textContent = number + ' is not a prime number.';
    }
  }
  
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  