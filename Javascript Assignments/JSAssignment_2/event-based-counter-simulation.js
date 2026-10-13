// Q6. Event-Based Counter Simulation
let count = 0;

function showCount() {
    // The nested function can access count from the outer scope.
    function printCount() {
        console.log(`Count: ${count}`);
    }

    printCount();
}

function increment() {
    count++;
    showCount();
}

function decrement() {
    count--;
    showCount();
}

increment();
increment();
decrement();
