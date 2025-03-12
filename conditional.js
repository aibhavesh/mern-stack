//conditional statements
// if 
a=10;
if(a===10){
    console.log("a is 10");
}

//if else
if(a===20){
    console.log("a is 20");
}
else{
    console.log("a is not 20");
}

//else if
if(a===20){
    console.log("a is 20");
}
else if(a===30){
    console.log("a is 30");
}
else{
    console.log("a is not 20 or 30");
}

//switch
let b=10;
switch(b){
    case 10:
        console.log("b is 10");
        break;
    case 20:
        console.log("b is 20");
        break;
    default:
        console.log("b is not 10 or 20");
        break;
}
//ternary operator
let c=10;
let d=c>10?"c is greater than 10":"c is less than 10";
console.log(d);

