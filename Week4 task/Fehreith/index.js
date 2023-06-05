let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

celsius.oninput = () => {
    let output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(output.toFixed(2));
};

function reset() {
    celsius.value = "";
    fahrenheit.value = "";
}

function deleteLastInput() {
    if (celsius.value.length > 0) {
        celsius.value = celsius.value.slice(0, -1);
    } else if (fahrenheit.value.length > 0) {
        fahrenheit.value = fahrenheit.value.slice(0, -1);
    }
}
