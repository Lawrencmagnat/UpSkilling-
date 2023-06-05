let primes = [];

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

function generatePrimeNumbers() {
  let count = 0;
  let number = 2;
  primes = [];
  
  while (count < 100) {
    if (isPrime(number)) {
      primes.push(number);
      count++;
    }
    number++;
  }
  
  displayPrimeNumbers(primes);
}

function displayPrimeNumbers(primes) {
  const resultElement = document.getElementById('result');
  let html = '';
  
  for (let i = 0; i < primes.length; i++) {
    html += primes[i] + ' ';
  }
  
  resultElement.textContent = html;
}

function resetForm() {
  primes = [];
  displayPrimeNumbers(primes);
}
