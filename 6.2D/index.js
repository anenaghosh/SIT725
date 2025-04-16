// index.js

// A simple function that returns a greeting message
function hello() {
    return "Hello World";
}

// A function to add two numbers
function add(a, b) {
    return a + b;
}

// A function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// A function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

module.exports = {
    hello,
    add,
    isEven,
    multiply
};
