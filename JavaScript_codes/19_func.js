/*
function jatin(n1, n2) {
    console.log("hii guys!!! ");
    console.log("hii guys!!! ");
    console.log("hii guys!!! ");
    console.log("hii guys!!! ");
    console.log(n1 + n2);
}

// jatin       //  it's only a reference
jatin(2, 3)     //  it's executed coz this thing --> ()  

// function addTwoNumbers(n1 , n2 ) {
//     console.log(n1+n2);    
// }

// addTwoNumbers(3+4) // 7
// 3+'4' = 34 
// 3 + 'a' = 3a

// function sam(parameters ) {              }
// sam(arguments) // also called values passed


function addTwoNumbers(n1, n2) {
    console.log(n1 + n2);  //  print only
    return n1 + n2;  // this will return value 
    //return is last ena pachi kai print na karai sko
}
const result = addTwoNumbers(3, 4) // undefined coz store karyu


 
function loginUserMessage(usr) {   
    return `${usr} just logged in..`
}
console.log(loginUserMessage("jatin1")); //jatin1 just logged in..
console.log(loginUserMessage(""));  // just logged in..
console.log(loginUserMessage());  //undefined just logged in..

console.log("----------some speacial conditions applying----------");
//some speacial conditions applying

function loginUserMessage(usr) {
    if (usr === undefined) {  
        console.log("please.. Enter the username");
        return
    }
    return `${usr} just logged in..`
}
console.log(loginUserMessage(""));  // just logged in..
console.log(loginUserMessage());  
// jyre khali hoy tyre output : please.. Enter the username
// undefined


// if(undefined) if() to ene false value kevay...
// solution is if(!username)  --> ! 'not' lagai devu

*/

function calculateCartPrice(...num1) {
    return num1;
}
 
console.log(calculateCartPrice(200,400,600,5000));   //  [ 200, 400, 600, 5000 ]
//rest operator and spread operator
//...num1            num1...
// pachhad 5000 add krie input ma to pn output ma add thy jay


function calculateCartPrice(val1, val2, ...num1) {
    return num1;    
}
console.log(calculateCartPrice(200,  400 ,  865,600,700)); 
//                             val1, val2,  ...num1
//                                         [ 865, 600, 700 ]

const user = {
    username : "jatin",
    price : 99
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)     // veriable ma nakho or direct apo chale
handleObject({
    username : "sam",
    price : 299
})

const myNewArr = [2,3,4,5]

function returnValue(getArr) {
    return getArr[1]
}

console.log(returnValue(myNewArr))   // 3
console.log(returnValue([23,34,54,23]))  // 34