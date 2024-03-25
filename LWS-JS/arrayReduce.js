// const recapReduce = [12, 10, 14, 5, 6, 7, 88, 95];
// const using = recapReduce.reduce((count, setCount) => {
//     return count + setCount;

// }, 0)
// console.log(using);


// var num = 15;
// while (num >= 1) {
//     console.log(num);
//     num--;
// }



// const sum = [12, 1, 2 , 5, 8 , 18 , 54, 13];
// const totalSum = sum.reduce((preValue, currentValue) =>{
//     const total = preValue + currentValue;
//     return total
// } , 0)
// console.log(totalSum);


const some = [12,14,57,9,5,45,6];
const sum = some.reduce((count,setCount)=>{
    const result = count + setCount;
    return result;
},0)
console.log(sum);
