let firstNumber = ''
let secondNumber = ''
let operator = ''
const display = document.getElementById('result')
const appendToDisplay = (input) =>{
    display.value += input
}

const clearDisplay = () =>{
    display.value = '';
}

const calc = () => {
    try{
        display.value = eval(display.value)

    }catch(e){
        display.value = "ERROR"
    }
}
let addOperator = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}
let minusOperator = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber
}
let multiplyOperator = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber
}
let divideOperator = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber
}
let operate = (firstNumber, secondNUmber, operator) => {
    if (operator == '+'){
        return addOperator(firstNumber,secondNUmber)
    } 
    if (operator == '-'){
        return minusOperator(firstNumber,secondNUmber)
    } 
    if (operator == '*'){
        return multiplyOperator(firstNumber,secondNUmber)
    }
    if (operator == '/'){
        return divideOperator(firstNumber,secondNUmber)
    }

}
console.log(operate(0, 0, '/'));

console.log(operate(10, 1, '+'));