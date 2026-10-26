"use strict";

function makeMultiplier(multiplier) {
    // The returned function remembers the multiplier from this outer scope.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log("Triple 5:", triple(5)); // 15
console.log("Double 5:", double(5)); // 10
