const userName = "Sandesh";
const userAge = 21;
const isStudent = true;
const subjects = ["JavaScript", "HTML"];
const user = { name: "Sandesh", age: 21 };
const middleName = null;
let address;

console.table([
    { label: "userName", value: userName, type: typeof userName },
    { label: "userAge", value: userAge, type: typeof userAge },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "user", value: JSON.stringify(user), type: typeof user },
    { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "address", value: address, type: typeof address }
]);
