// const array1 = [5, 12, 80, 130, 44];

// const isLargeNumber = (element) => element > 13;
// const isLargeNumber2 = (element) => element < 1;

// console.log(array1.findIndex(isLargeNumber));
// console.log(array1.findIndex(isLargeNumber2));

// function isOdd(element) {
//     return element % 2 !== 0;
// }

// let numbers = [2, 8, 7, 1, 3, 4];

// let firstOdd = numbers.findIndex(isOdd);

// console.log(firstOdd);

function runDev(params) {
    return params % 2 !== 0
}
const array  = [2,8,4,6,8,1,3,5,12]
console.log(array.findIndex(runDev));

