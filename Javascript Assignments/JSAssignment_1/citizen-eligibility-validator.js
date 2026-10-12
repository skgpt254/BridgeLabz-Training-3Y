const age = 19;
const isCitizen = true;
let eligibility;

if (isCitizen) {
    if (age >= 18) {
        if (age >= 21) {
            eligibility = "Eligible for all services.";
        }
        else {
            eligibility = "Eligible to vote only.";
        }
    }
    else {
        eligibility = "Not eligible yet.";
    }
}
else if (age >= 18) {
    eligibility = "Only age criteria met.";
}
else {
    eligibility = "Not eligible yet.";
}
console.log(eligibility);
