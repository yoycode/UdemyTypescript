function printArray(arr: number[]) {
    console.log(arr); // [1, 2, 3]
}
const arr = [1, 2, 3];
printArray(arr);


function wrongLength(arr: number[]) {
    console.log(arr[0]);    // 1
    console.log(arr[1]);    // 2
    console.log(arr[2]);    // 3
    console.log(arr[3]);    // undefined
}
wrongLength(arr);


function printTuple(tpl: [number, number, string]) {
    console.log(tpl);   // [12, 34, 'HelloWorld']
}
const tpl: [number, number, string] = [12, 34, 'HelloWorld']
printTuple(tpl)


