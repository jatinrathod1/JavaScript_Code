// // for loop

// for (let i = 0; i < 7; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is best number...");
//     }
//     console.log(i);
// }

// // console.log(i);  // ReferenceError: i is not defined

// let myArr = ["flash", "batman", "Superman"]
// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr.length);
//     for (let j = 0; j < myArr.length; j++) {
//         const element = myArr[j];
//         console.log(element);
//     }
// }

// // break and contionue

// for (let i = 0; i < 7; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is best number...");
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 7; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is best number...");
//         continue;
//     }
//     console.log(i);
// }

// while loop

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }

let myarr = ['Iron-Man', "wanda", "vision", "spidy"]
let arr_index = 0
while (arr_index < myarr.length) {
    console.log(`value is ${myarr[arr_index]} `);
    arr_index=arr_index+1 
}

//  do while loop

let score=11    // ek var to do run thse while ma check krine ruki jse..
do {
    console.log(`score is : ${score}` );
    score++;
} while (score<=10);

