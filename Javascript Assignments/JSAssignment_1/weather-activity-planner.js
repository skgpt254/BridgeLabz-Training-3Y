const temperature = 22;
const isRaining = false;
const windSpeed = 12;

let advice;
if (isRaining) {
    advice = "Stay indoors with hot coffee.";
}
else if (temperature > 35) {
    advice = "Go swimming.";
}
else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
}
else {
    advice = "Perfect day for a walk.";
}
const weatherIsComfortable = !isRaining && temperature >= 15 && temperature <= 35 && windSpeed <= 20;
console.log(advice);
console.log(`Comfortable outdoor conditions: ${weatherIsComfortable}`);
