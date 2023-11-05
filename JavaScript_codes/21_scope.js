//------------- Global scope and Local scope in js ------------------


// Global scope
/*
// where to accesbale or not 

var c = 40
let a = 50  // globally let 50 j rese sivay if.. 

if (true) {      // Block Scope
    let a = 10
    const b = 20
    var c = 30  // var keyword par block_scope na lage.. inner ma hoy to pn globally change thay jay..
    console.log("Inner a :", a);
} // curly_braces are scope 

console.log("Globally a :", a);   // if --> a undefined jo bahar na value hoy to
// console.log(b);                // if --> b undefined jo bahar na value hoy to
console.log("var c is :", c);    // if --> c got value 30

// global declare "var c" and " c " hoy e changeble 6..
// "let" , "const"  --> change nai thay..

//interview
// Inspect ma jaine scope use krie and node (vs code) through krie both are different
*/


//-------------  nested scope using function in js ------------------

function one() {
    const username = "Jatin"

    function two() {
        const website = "youtube "
        console.log(username,": added in the nested function")  // error nai ave coz function one ni andar 6..
    }
    // console.log(website);  // Error avsve scope ni bar 6.. coz ReferenceError: website is not defined..
    two() // Jatin : added in the nested function
}
one()  // band rakhis to call j nai thay..

// nested scope using if else


