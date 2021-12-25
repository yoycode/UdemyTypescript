function add(arg1: number | string, arg2: number | string) {
    // type guard
    if (typeof arg1 == 'number' && typeof arg2 == 'number') {
        return arg1 + arg2; // add number
    }

    if (typeof arg1 == 'string' && typeof arg2 == 'string') {
        return arg1 + arg2; // concatenate string
    }

    return; // return nothing (void)
}

const string1 = 'Hello';
const string2 = 'World';
const resultString = add(string1, string2);
console.log(resultString);  // HelloWorld

const number1 = 10;
const number2 = 20;
const resultNumber = add(number1, number2); // 30
console.log(resultNumber)

const string3 = 'random';
const number3 = 1;
const resultMixed = add(string3, number3);
console.log(resultMixed);   // undefined
