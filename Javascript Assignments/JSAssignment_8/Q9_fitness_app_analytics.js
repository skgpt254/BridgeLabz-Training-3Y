"use strict";
class FitnessAnalytics {
    constructor(workoutData) {
        if (!Array.isArray(workoutData) || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }
        this.workoutData = workoutData.map(record => ({ ...record }));
    }
    getActiveUsers() {
        return this.workoutData.filter(record => record.steps > 7000);
    }
    getAverageCalories() {
        const total = this.workoutData.reduce((sum, record) => sum + record.calories, 0);
        return total / this.workoutData.length;
    }
    getUserSummary() {
        return this.workoutData.map(record =>
            `${record.user} walked ${record.steps} steps and burned ${record.calories} calories.`);
    }
}

const data = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const analytics = new FitnessAnalytics(data);
    console.log("ACTIVE USERS (> 7000 STEPS)");
    console.table(analytics.getActiveUsers());
    console.log("AVERAGE CALORIES:", analytics.getAverageCalories());
    console.log("USER SUMMARIES");
    analytics.getUserSummary().forEach(message => console.log(message));
} catch (error) {
    console.log("Analytics error:", error.message);
}

try {
    new FitnessAnalytics([]);
} catch (error) {
    console.log("Empty dataset test:", error.message);
}
