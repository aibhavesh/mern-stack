//functions in programming is uesd to perform a specific task repeatedly

// we can declare a function in two ways
// 1. function declaration    let fun=function(a,b){return a+b;}
//
// 2. function expression     function fun(a,b){return a+b;}    

let fun=()=>{
    console.log("this is a function");
}
fun();
//
function name(a,b) {
    return a+b;
    
}
console.log(name(10,20));

//function with default parameter
function add(a,b=10){
    return a+b;
}
console.log(add(10));
console.log(add(10,20));

//function returning a function
function add1(a){
    return function(b){
        return a+b;
    }
}

let add2=add1(10);
console.log(add2(5));
console.log(add1(10)(20));


/*    
Function Definition:

javascript
function add1(a){
    return function(b){
        return a+b;
    }
}
The add1 function takes one argument a and returns another function.

The returned function takes an argument b and returns the sum of a and b.

Using add1 Function:

javascript
let add2 = add1(10);
When add1(10) is called, it returns a new function that takes b as a parameter and returns 10 + b.

add2 now references this new function.

Invoking the Returned Function:

javascript
console.log(add2(5)); // Outputs: 15
add2(5) calls the function returned by add1(10) and passes 5 as b.

It returns 10 + 5, which is 15.

Direct Function Call:

javascript
console.log(add1(10)(20)); // Outputs: 30
add1(10) returns a function that takes b and returns 10 + b.

Immediately calling this returned function with 20 as the argument results in 10 + 20, which is 30.

In essence, the add1 function is a higher-order function that returns another function to add a given number to its argument. It's a good example of closures in
JavaScript.

*/
