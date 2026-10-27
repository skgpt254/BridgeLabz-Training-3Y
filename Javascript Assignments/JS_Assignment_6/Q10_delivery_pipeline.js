"use strict";
function runDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => {
            if (Math.random() < 0.15) reject(new Error(`${stepName} failed.`));
            else resolve(successMessage);
        }, delay);
    });
}
async function runPipeline() {
    console.log("Start Pipeline");
    try {
        const order = await runDeliveryStep("takeOrder", "Step 1: Order taken");
        console.log(order);
        const food = await runDeliveryStep("prepare", "Step 2: Food prepared");
        console.log(food);
        const packageReady = await runDeliveryStep("pack", "Step 3: Package ready");
        console.log(packageReady);
        const dispatch = await runDeliveryStep("dispatch", "Step 4: Out for delivery");
        console.log(dispatch);
        const delivered = await runDeliveryStep("deliver", "Delivery completed!");
        console.log(delivered);
    } catch (error) {
        console.log("Pipeline failed!");
        console.log(`Reason: ${error.message}`);
    }
}
runPipeline();
