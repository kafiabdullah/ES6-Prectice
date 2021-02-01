// create function and if you wan't declare value when call a function
// then you can add default value of function perameter
function numbers(number1, number2 = 0){
    
    // method 1 if you can't pass peremeter value
    //  number2 = number2 || 0;
    return number1 + number2;
}

const total = numbers(15);
console.log(total);