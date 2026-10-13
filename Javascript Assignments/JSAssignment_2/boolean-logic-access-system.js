// Q5. Boolean Logic Access System
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

const isSecure =
    isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

if (isSecure && !( !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside)) {
    console.log("Secure");
}
else {
    console.log("Unsafe");
}

// Change the values above to test other outcomes.
