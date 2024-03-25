const myObject = {
    name:"Javascript",
    roll:12,
    ested:2004,
    skills:{
        p_r_m:["Html","css", "daiysui","tailwind"]
    }
}
// const sum = myObject.skills.p_r_m;
// console.log(sum);
// const {name,skills:{p_r_m}} = myObject;
// console.log(name,p_r_m);

function isSubstring(searchString, subString){
    let lowerSearchStr = searchString.toLowerCase();
    let lowerSubStr = subString.toLowerCase();
    
    return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}
// console.log(isSubstring("The cat went to the store", "he cat went")); // => true
// console.log(isSubstring("Time to program", )); // => true
console.log (isSubstring("I love you","love you 2"));