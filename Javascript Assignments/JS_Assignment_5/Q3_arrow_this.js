"use strict";

const user = {
    name: "Alex",
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName();

// Arrow functions do not get their own `this`.
// A normal method gets `this` from the object before the dot.
const fixedUser = {
    name: "Alex",
    showName: function () {
        console.log("Normal function this.name:", this.name);
    }
};

fixedUser.showName();
