// for(let i = 0; i<= 5; i++){
//     console.log(i);
// }

let i = 0;
for (; ; i++){
    if(i <= 5){
    console.log(i);
    }else{
        break;
    }

}

//for in

const denAkta = {
    name: " react",
    brand: " mza",
    years: "0000"
}

for(property in denAkta){
    console.log(property);
}




const studentDetails= {
    name: "Tapazzal",
    age: 20,
    location: " Chandpur",
    married: "single"
}
for(studentName in studentDetails){
    console.log(studentName);
}







// const myArray = [1, 2, 4, 5,6];
// for(element in myArray){
//     console.log(element);
// }



const myString = " I will be wellDeveloper."
for(dev in myString){
    console.log(dev);
}


//reduce, for loop, if else,  for in , for of