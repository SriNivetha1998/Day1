//function key word function name and paraentizes
// function with parameter
function add (num1,num2){//parameters
    console.log(num1+num2);
    
}
add(2,3);//argument value
add(45,77);
// function without parameter

function greeting(){
    console.log("hello");
    
}
greeting();

//function with retuen keyword
function greeting(){
    return "hello";// instead of charted you can use numbers without double quotes
    console.log("Addition");// it wont print where return keyword is used so no further statemnts will be printed
}
console.log(greeting());


// types-immediate invoke function experience

//iife without parameter
(function box() {
console.log("magic box");

})();

// iife with parameter
(function trend(institute){
    console.log("this is an " +institute);
    
})("trendnologies");


// function expersion--> store a function to a variable
let aa = function data(){
    console.log("This data is fetched");
    
};
aa();

//arrow function

//arrow with parameter--->SIMPLIFY THE STATEMENT IN A LINE

const task=(a,b)=> {
    return a+b;
}
console.log(task(7,3));

//arrow without parameter

const test=()=> 6+7;
console.log(test());
