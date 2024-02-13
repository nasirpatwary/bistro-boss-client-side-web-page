const e = require("cors");

const fruits = ["apple", "orange", "banana"]
for (let i = 0; i < fruits.length; i++) { 
    // console.log(fruits[i]);
}
for (const element of fruits) {
    // console.log(element);
}
// const person = {
//     name:"Nasir",
//     age:12,
//     job:"Web Developer"
// }
// for (const key in person) {
//        console.log(person[key]);

//     }
//function
// function address(num1, num2) {
//     return num1 * num2
// }
// console.log(address(5, 5));
// //arrayFunction
// // const array = (num1, num2)=> num1 + num2 
// // console.log(array(5,5));
// //arrayFunction
// const array = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// }
// console.log(array(55, 105));


// map(),forEach(),filter(), find()
// map()
/**
 * returns a new array 
 * doesn't modify the original array
 * */ 
const numbers = [10,20,30,40,50,60,70,80]
// const result = numbers.map(num => num * 2)
// console.log(result);
// console.log(numbers);
/**
 * forEach() doesn't return array, iterate over the element of an array
*/
// numbers.forEach(num =>console.log(num))
// find() ---
// console.log(numbers.find(num =>num > 50));
// filter() ---
/**
 * retutn a new array
 * doesn't modify the original array
 * preserve the order of  all element
*/
// const result = numbers.filter(num =>num > 30)
// // console.log(result);
// // console.log(numbers);
//  const person = ["rayhan","nasir","forhad"] 
// //   const res = person.slice(0,2)
// //   console.log(res);
// const myStr = "hello world"
// const res = myStr.substring(0,7)
// console.log(res);

const myNumber = [10,20,30,40,50,60,70,80];
const allNumber = [...myNumber];
myNumber.push(100)
allNumber.push(110) 
// console.log(myNumber);
// console.log(allNumber);
// const myFunction = (num1,num2,num3,...param) =>{
//     console.log(param);
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);
//     let sum = 0
//     param.forEach(element => {
//        sum = sum + element
//     });
//     console.log(sum);
// }
// myFunction(1,2,3,4,5,6,7,8,9,10)
const person = { 
    name:"Nasir Hossin",
    age:12,
    student:"web developer",
}
const person1 = {
    loaction:"Dhaka",
    country:"Bangladesh"
}

const allPerson ={...person, ...person1};
// console.log(allPerson);
const nextLevel = (name) =>{
    const result =`Hello ${name}, wlecome to next level!`
    console.log(result);
}
nextLevel("Nasir")