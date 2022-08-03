// program to add two numbers using a function
function add(a,b){
    return a+b;
}
console.log (add(2,2));

// program to subtract two numbers using a function
function subtract(a,b){
    return a-b
}
console.log (subtract(20,10));

// program to multiply two numbers using a function
function multiply(a,b){
    return a*b;
}
console.log(multiply(5,2));

// program to divide two numbers using a function
function divide(a,b){
    return a/b;
}
console.log(divide(12,2));

// program to  increment two numbers using a function
function increment(n){
    return n += 1;
}
console.log(increment(2));

// program to decrement two numbers using a function
function decrement(n){
    return n -= 1;
}
console.log(decrement(2));

function makeInt(string){
    return parseInt(string,10)
}

function preserveDecimal(string){
    return parseFloat(string)
}