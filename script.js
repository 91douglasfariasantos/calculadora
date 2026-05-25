let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const currentTextElement = document.getElementById('current-operation');
const previousTextElement = document.getElementById('previous-operation');

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && number !== '.') currentOperand = number;
    else currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') compute();
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+': computation = prev + current; break;
        case '-': computation = prev - current; break;
        case '*': computation = prev * current; break;
        case '/': computation = prev / current; break;
        default: return;
    }

    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function clearAll() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function deleteDigit() {
    currentOperand = currentOperand.toString().slice(0, -1);
    if (currentOperand === '') currentOperand = '0';
    updateDisplay();
}

function updateDisplay() {
    currentTextElement.innerText = currentOperand;
    if (operation != null) {
        previousTextElement.innerText = `${previousOperand} ${operation}`;
    } else {
        previousTextElement.innerText = '';
    }
}