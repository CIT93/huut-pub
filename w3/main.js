let cardonFootprintPoints = 0;
const numberInHousehold = 5;

if (numberInHousehold === 1){
    cardonFootprintPoints = cardonFootprintPoints + 14;
}  else if (numberInHousehold === 2){
    cardonFootprintPoints = cardonFootprintPoints + 12; 
}  else if (numberInHousehold === 3){
    cardonFootprintPoints = cardonFootprintPoints + 10;
}  else if (numberInHousehold === 4){
    cardonFootprintPoints = cardonFootprintPoints + 8;
}  else if (numberInHousehold === 5){
    cardonFootprintPoints = cardonFootprintPoints + 6;
}  else if (numberInHousehold === 6){
    cardonFootprintPoints = cardonFootprintPoints + 4;
}  else if (numberInHousehold > 6){
    cardonFootprintPoints = cardonFootprintPoints + 2;
} else {
    console.log("not points updated");
}

console.log(`Based on the number of member of the household of ${numberInHousehold} the points would be ${cardonFootprintPoints}`);
