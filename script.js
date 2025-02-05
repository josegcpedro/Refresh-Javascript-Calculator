let number1, number2;

function getNumbers() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    console.log("Numéro 1:", number1);
    console.log("Numéro 2:", number2);
}

function addition() {
    getNumbers();
    const result = parseFloat(number1) + parseFloat(number2);
    document.getElementById("result").textContent = `Résultat: ${result}`;
}

function soustraction() {
    getNumbers();
    const result = parseFloat(number1) - parseFloat(number2);
    document.getElementById("result").textContent = `Résultat: ${result}`;
}

function multiply() {
    getNumbers();
    const result = parseFloat(number1) * parseFloat(number2);
    document.getElementById("result").textContent = `Résultat: ${result}`;
}
