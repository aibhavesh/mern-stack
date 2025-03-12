// datatypes are the types of data that can be stored in a variable
// there are two types of datatypes in javascript
// 1. primitive datatypes
// 2. reference datatypes/ non-primitive datatypes
// primitive datatypes are further divided into 6 types
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol

//non-primitive datatypes are further divided into 3 types
// 1. object literals
// 2. arrays
// 3. functions

let a=10;
var b=[1,2,3,4,5];
console.log(a);
var c=b;
console.log(c);
console.log("the value of index a is now changes to 20 but the value of index c is also changed");
c[0]=20;
console.log(b);
console.log(c);

console.log("this is because the value of c is the reference of b");
console.log("if we want to copy the array then we can use the spread operator");

//array can be copy using the spread operator method
let d=[1,2,3,4,5];
let e=[...d];
e[0]=10;
console.log(d);
console.log(e);

console.log("now array in array");
let arr=[[1,2],[3,4],[5,6]];
console. log(arr);
console.log(arr[0]);
console.log(arr[0][0]);
console.log(arr[0][1]);

console.log("now object in array known asJSON that is javascript object notation");
let f=[{name:"sachin",age:20},{name:"rahul",age:21}];
console .log(f);
console.log(f[0]);
console.log(f[0].name);
console.log(f[0].age);

console.log("now object in object");
let g={name:"sachin",age:20, address:{city:"mumbai",state:"maharashtra"}};
console.log(g);
console.log(g.name);
console.log(g.address.city);
console.log(g.address.state);

console.log("now array in object");
let h={name:"sachin",age:20, address:[{city:"mumbai",state:"maharashtra"},{city:"pune",state:"maharashtra"}]};
console.log(h);
console.log(h.name);
console.log(h.address[0].city);
console.log(h.address[0].state);