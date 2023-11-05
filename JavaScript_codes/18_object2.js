console.log("objects in js")

/*

// const appl = {}           // Non-singleton
const apl = new Object()    // singleton

apl.id = "123abc"
apl.name = "samm"
apl.isLoggedIn = false

// console.log(apl)
// console.log(apl.id," ",apl.name," ",apl.isLoggedIn)

const regularUser = {
    email: "jatin@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Jatin"
            , lastName: "Rathod"
        }
    }
}
console.log("Your Email is: ", regularUser.email) //Your Email is:  jatin@gmail.com
console.log("Full name :", regularUser.fullName) //Full name : { userFullName: { firstName: 'Jatin', lastName: 'Rathod' } }
console.log("User Name :", regularUser.fullName.userFullName)//User name : { firstName: 'Jatin', lastName: 'Rathod' }
console.log("Name :", regularUser.fullName.userFullName.firstName)//Name : Jatin

console.log("Name :", regularUser.fullName?.userFullName.firstName)//Name : Jatin
//? is used for is exist or not


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }
// console.log(obj3)   // (1)

// const obj3 = Object.assign(target , source)
const obj3 = Object.assign({}, obj1, obj2)
//ans:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = { ...obj1, ...obj2 }
// console.log(obj3) ////ans:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [{ "id": 1 }, { "id": 2 }]
// console.log(users[1].id)

console.log(Object.keys(apl));     //  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(apl));   //  [ '123abc', 'samm', false ]
console.log(Object.entries(apl));  //  [ [ 'id', '123abc' ], [ 'name', 'samm' ], [ 'isLoggedIn', false ] ]

console.log(apl.hasOwnProperty('id'));   // true

// destructuring of object

const cors = {
    cn: "js destructor",
    price: 900,
    cors_instructor: "abxcs"
}

// console.log(cors.cb);

//     key 
const { cors_instructor : ci } = cors // object_name

console.log(ci);


*/

