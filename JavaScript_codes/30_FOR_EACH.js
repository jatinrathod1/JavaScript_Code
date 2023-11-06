//different type to use for each loop

// object in the array are oftenly use for each loop..


const coding = ["js", "rb", "cpp", "java"]


// FOR EACH loop 
coding.forEach(function (val) {
    console.log(val);
})

// USING ARROW FUN
coding.forEach((item) => {
    console.log(item);
})
 
// simple way for each...
function simple(item) {
    console.log(item);
}
coding.forEach(simple)


coding.forEach((item, index, arr) => {   // function call back it self...
    console.log(item, index, arr);
})


// array ma object ma for each loop..
const mycoding = [
    {
        Languagename: "js",
        use: "50%"
    },
    {
        Languagename: "py",
        use: "80%"
    },
    {
        Languagename: "c",
        use: "90%"
    }
]

mycoding.forEach((item)=>{
    console.log(item.Languagename);
})
