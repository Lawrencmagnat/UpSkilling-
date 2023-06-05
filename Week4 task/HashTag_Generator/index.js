function generateHashtag() {
    const inputText = document.getElementById('inputText').value;

    // Remove spaces and split the input text into an array of words
    const words = inputText.replace(/\s/g, '').split(' ');

    // Capitalize the first letter of each word and join them with #
    const hashtag = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    if (hashtag.length > 140 || hashtag === '') {
        displayResult(false);
    } else {
        displayResult('#' + hashtag);
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.value = result !== false ? result : 'Invalid input or result!';
}

function reset() {
    document.getElementById('inputText').value = '';
    document.getElementById('result').value = '';
}
