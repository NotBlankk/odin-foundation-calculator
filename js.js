let firstNumber = 0
let secondNumber = 0
let operator = ''

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