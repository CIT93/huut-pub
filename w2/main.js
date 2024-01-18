// Method 1
const householdPoint = 8;
const homeSizePoint = 2;
const foodPoint = 12;
const waterConsumptionPoint = 1;
const householdPurchasePoint = 4;
const wasteProducePoint = 30;
const wasteRecyclePoint = 8;
const annualTransportPoint = 24;

const totalCarbonFootprintPoints = householdPoint + homeSizePoint + foodPoint + waterConsumptionPoint + householdPurchasePoint + wasteProducePoint + wasteRecyclePoint + annualTransportPoint;

const carbonFootprintPointsText = document.querySelector("h2");
carbonFootprintPointsText.textContent = totalCarbonFootprintPoints + " points";