"use strict";
function runStage(stageName, callback) {
    setTimeout(() => { console.log(stageName); callback(); }, 1000);
}
function runWithNestedCallbacks() {
    console.log("Nested callback pipeline:");
    runStage("Design", () => runStage("Build", () => runStage("Test", () =>
        runStage("Deploy", () => runStage("Celebrate", () => console.log("Callback pipeline complete."))))));
}
function waitForStage(stageName) {
    return new Promise(resolve => setTimeout(() => { console.log(stageName); resolve(); }, 1000));
}
async function runWithAsyncAwait() {
    console.log("\\nAsync/await pipeline:");
    await waitForStage("Design");
    await waitForStage("Build");
    await waitForStage("Test");
    await waitForStage("Deploy");
    await waitForStage("Celebrate");
    console.log("Async/await pipeline complete.");
}
// async/await keeps sequential work in a flatter flow instead of deeply nested callbacks.
runWithNestedCallbacks();
setTimeout(runWithAsyncAwait, 5500);
