function fizzBuzz() {
    const resultElement = document.getElementById('result');
    let output = '';

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz ';
        } else if (i % 3 === 0) {
            output += 'Fizz ';
        } else if (i % 5 === 0) {
            output += 'Buzz ';
        } else {
            output += i + ' ';
        }
    }

    resultElement.textContent = output.trim();
}

function reset() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
}
