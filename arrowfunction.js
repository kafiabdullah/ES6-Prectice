// arrow function
// single parameter function
const doubleNumber = num => num * 2;

// double perameter function
const sumNumber = (num1, num2) => num1 + num2;

// double parameter and multiple calculation

const doMath = (number1, number2) =>{
    const summation = number1 + number2 ;
    const subtract = number1 - number2 ;
    const totalResult = summation * subtract;
    return totalResult;
}


const result = doubleNumber(5);
console.log(result);
const result2 = sumNumber(5,7);
console.log(result2);

const result3 = doMath(10,7);
console.log(result3);