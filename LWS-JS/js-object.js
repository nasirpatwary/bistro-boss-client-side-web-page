function vowelsCounter(word) {
    let vowelsNumber = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (const char of word) {
        if (vowels.includes(char)) {
            vowelsNumber++;
        }
    }
    return vowelsNumber
}

let vowelCheck = vowelsCounter("let me check the vowel")
// console.log(vowelCheck);

// let myArray = [2, 3, 4];
// let doubleArray = myArray.map((ele) => ele * 2)
// console.log(doubleArray);
const perfect = {
    name:"Nasir Hossin",
    age:11,
    id:2,
    myStudy: function(){
        console.log(this.newFunction());
        return `How are you ${this.name} Your age ${this.age} and id ${this.id}`
    },
    newFunction: function(){
        return this.name
    }
}
console.log(perfect.myStudy());
