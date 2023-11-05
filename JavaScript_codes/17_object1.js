// if we want declare object than do by literals and constructor 
//concept is like singleton --> using constructor we make object than that is going like that

// in literal that singleton not possible
// in constructor that always possible

// (1) Object literals   --> example is given below

const mysym = Symbol('key')

const jsuser={
    name:"jatin",
    "full name":"jatin rathod",
    age:18,
    [mysym]:"flag",
    location:'ahm',
    email:"jatinrathod17@gmail.com",
    lastLoginDays:["monday","saturday"]

}     // curly braces are called object 
//in the key  -->  'name' is bydefault use as  string 

console.log(jsuser.email)       // 1st way is not good defined type
// console.log(jsuser[email]);     // give email in string
console.log(jsuser["email"]);   //2nd way of do

// for 'full name' 1st way is gives error 
// console.log(jsuser."full name")    
console.log(jsuser["full name"])       // so 2nd was going to run

console.log("using symbol :" , jsuser[mysym]);   // mysym ne object ma [] na vagar use krie to string kevay..

// Object.freeze(jsuser)             //after freezing that can't change the value

jsuser.age=34        // change the value of age
console.log(jsuser.age)  

jsuser.greeting = function(){
    console.log("hello guys!!");
}

console.log(jsuser.greeting);      // output : [Function (anonymous)]
console.log(jsuser.greeting());    // output : hello guys!!

// Want to refer the object_variable in this function simply define as below.. 
jsuser.greeting = function(){
    console.log(`hello guys!! $`);
}
