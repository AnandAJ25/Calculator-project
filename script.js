let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function setOperator(operator) {
    if (currentOperator !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    currentOperator = operator;
    displayValue = '';
}

function calculate() {
    if (currentOperator === null || displayValue === '') {
        return;
    }
    secondOperand = parseFloat(displayValue);
    switch (currentOperator) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            displayValue = (firstOperand / secondOperand).toString();
            break;
    }
    currentOperator = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
