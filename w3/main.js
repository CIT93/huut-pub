function determineHouseholdPts(numberInHousehold) {
   console.log("Inside the function");

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
}


function calculateEnvironmentalImpact(homeType) {
   switch(homeType) {
       case 'large house':
         cardonFootprintPoints += 10;
         break;
       case 'medium house':
         cardonFootprintPoints += 7;
         break;
       case 'small house':
         cardonFootprintPoints += 4;
         break;
       case 'apartment':
         cardonFootprintPoints += 2;
         break;
       default:
         console.log('Invalid home type');
   }
}

let cardonFootprintPoints = 0;

calculateEnvironmentalImpact('medium house');
console.log(cardonFootprintPoints);