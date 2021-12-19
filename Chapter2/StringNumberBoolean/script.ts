function add(arg1: number, arg2: number) {
    return arg1 + arg2;
}
const num1 = 2;
const num2 = 3;
const numResult = add(num1, num2);
console.log(numResult)  // 5


function concatenate(arg1: string, arg2: string) {
    return arg1 + arg2;
}
const string1 = 'Hello';
const string2 = 'World';
const stringResult = concatenate(string1, string2);
console.log(stringResult);  // HelloWorld


function check(arg: number) {
    if (arg > 2) return false;
    else return true;
}
const checkNum1 = 1;
const checkNum2 = 3;
const booleanResult1 = check(checkNum1);
const booleanResult2 = check(checkNum2);

console.log(booleanResult1, booleanResult2);    // true false