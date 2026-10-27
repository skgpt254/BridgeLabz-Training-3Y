"use strict";
function loadProfile() {
    return new Promise((resolve, reject) => setTimeout(() =>
        Math.random() < 0.25 ? reject(new Error("Profile failed")) : resolve("Profile Loaded"), 2000));
}
function loadPosts() {
    return new Promise((resolve, reject) => setTimeout(() =>
        Math.random() < 0.25 ? reject(new Error("Posts failed")) : resolve("Posts Loaded"), 1500));
}
function loadMessages() {
    return new Promise((resolve, reject) => setTimeout(() =>
        Math.random() < 0.25 ? reject(new Error("Messages failed")) : resolve("Messages Loaded"), 1000));
}
async function loadDashboard() {
    const startTime = Date.now();
    const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
    const endTime = Date.now();
    const names = ["Profile", "Posts", "Messages"];
    results.forEach((result, index) => {
        if (result.status === "fulfilled") console.log(`${names[index]} succeeded: ${result.value}`);
        else console.log(`${names[index]} failed: ${result.reason.message}`);
    });
    console.log(`Total time: ${endTime - startTime} ms`);
}
loadDashboard();
