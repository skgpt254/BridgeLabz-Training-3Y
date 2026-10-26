"use strict";

// Add a simple map-like method to arrays using the prototype.
Array.prototype.myMap = function (callback) {
    const results = [];

    for (let index = 0; index < this.length; index++) {
        if (index in this) {
            results.push(callback(this[index], index, this));
        }
    }

    return results;
};

console.log([1, 2, 3].myMap(number => number * 2));
console.log(["a", "b", "c"].myMap((letter, index) => `${index}: ${letter}`));

// For production code, prefer the built-in map() to avoid modifying Array.prototype.
