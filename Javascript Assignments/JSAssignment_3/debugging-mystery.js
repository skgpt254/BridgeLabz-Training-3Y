// Q4. Debugging Mystery
"use strict";
function showMessage() {
    // Strict mode does not allow an undeclared variable
    const greeting = "Welcome";
    console.log(greeting);
}
showMessage();
// Debug: watch greeting and inspect the Call Stack while paused inside showMessage()
