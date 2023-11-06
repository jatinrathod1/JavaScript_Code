// For OF LOOP
// KEY , VALUE

const arr = [1, 2, 3, 4]

//         i   object
for (const n of arr) {
    // console.log(`array is ${n}`);
}
// console.log(`array is ${arr}`);

const greeting = "hell oex"

for (const g of greeting) {
    // console.log(`array is ${g}`);
}

// maps
// no-duplication , unique
const map = new Map()

map.set('in', 'india')
map.set('c', 'china')
map.set('pak', 'pakistan')

// console.log(map)   // Map(3) { 'in' => 'india', 'c' => 'china', 'pak' => 'pakistan' }

for (const key of map) {
    // console.log(key);
}

const myObject1 = {
    'game1': 'NFS',
    'game2': 'Spidy'
}

// for (const [key,v] of myObject1) {   // IT'S NOT ITERABLE FOR OBJECT ITERATION..
//     console.log(key , ':-' , v)
// }

// ----------------------------- FOR IN LOOP --------------------------------------
// value use krva object[key] em use thay...

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

const myObject = {
    js: 'javascript'
    , cpp: 'c++'
    , rb: 'ruby'
    , swift: 'swift by apple'
}


for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
    // console.log(v)  
}

const program = ["js", "rb", "py", "java", "cpp"]  // array

for (const key in program) {
    // console.log(key);
    // console.log(program[key]);
}

const map1 = new Map()

map1.set('in', 'india')
map1.set('c', 'china')
map1.set('pak', 'pakistan')

for (const [key, v] of map1) {
    console.log(key, ':-', v);
}
