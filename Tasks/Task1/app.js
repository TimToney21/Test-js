const resultElement = document.getElementById('result');
const input = document.getElementById('input');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
let count = 5;

function setInput() {
    count = parseInt(input.value);
}

function changeCount(value) {
    count += value;
    resultElement.textContent = count
}