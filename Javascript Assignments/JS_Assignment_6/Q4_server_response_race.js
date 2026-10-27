"use strict";
function startServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject(new Error(`${serverName} deployment failed.`));
            else resolve(`${serverName} responded`);
        }, delay);
    });
}
const serverA = startServer("Server A", 2000);
const serverB = startServer("Server B", 3000);
Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.log(`Deployment error: ${error.message}`));
Promise.race([serverA, serverB])
    .then(result => console.log(`Fastest response: ${result}`))
    .catch(error => console.log(`Fastest response failed: ${error.message}`));
