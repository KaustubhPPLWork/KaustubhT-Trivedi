// Used for (for) Loop 
const names = ["James",
    "Jacob",
    "Jackson",
    "Jordan",
    "Jared",
    "Jude",
    "Jeremiah",
    "James"
];
// Used for (for...in) loop 
const student = {
    firstname: "James",
    lastname: "Gordon",
    age: 19,
    id: "GSE28298ID"
}
//Used for (for...of) loop
const myname = "Kaustubh"; 


//for Loop example
for(let i = 0;i<names.length;i++){
    console.log(`Welcome ${names[i]}`)
}


//for...in loop example
for(let property in student){
    console.log(` ${property}: ${student[property]}`)
}


// for...of loop example 
for(let letters of myname){
    console.log(`${letters}`)
}