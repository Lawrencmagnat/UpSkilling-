function checkPrime() {
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);
  
    const isPrime = isNumberPrime(number);
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = isPrime ? 'The number is prime.' : 'The number is not prime.';
  }
  
  function isNumberPrime(number) {
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
  