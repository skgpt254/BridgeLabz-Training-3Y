// Q9. JSON Audit
"use strict";
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];
const cleanData = [];
const under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const user = JSON.parse(rawData[i]);
        if (user.user === undefined || user.age === undefined) {
            throw new Error("Missing user or age key");
        }
        const age = Number(user.age);
        if (!Number.isFinite(age)) throw new Error("Invalid age");
        const cleanUser = { user: user.user, age };
        cleanData.push(cleanUser);
        if (age < 18) under18Users.push(cleanUser);
    } catch (error) {
        console.log(`Line ${i + 1}: ${error.message}`);
    }
}
console.log("Clean data:", cleanData);
console.log("Users under 18:", under18Users);
