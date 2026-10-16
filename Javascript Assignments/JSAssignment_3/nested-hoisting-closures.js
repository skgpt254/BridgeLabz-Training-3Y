// Q10. Nested Hoisting and Closures
"use strict";
function outer() {
    console.log(count); // undefined: outer's var is hoisted
    var count = 5;

    function inner() {
        console.log(count); // undefined: inner has its own hoisted var
        var count = 10;
    }
    inner();
}
outer();

// Arrow functions can read a variable from their outer scope if they do not redeclare it
function outerWithArrow() {
    var count = 5;
    const inner = () => console.log(count);
    inner(); // 5
}
outerWithArrow();
// Debug: pause at each log and inspect Local/Closure scope and the Call Stack
