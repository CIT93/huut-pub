
const determineHouseholdPts = function(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1){
     houseHoldPoints = 14;
   }  else if (numberInHousehold === 2){
     houseHoldPoints = 12; 
   }  else if (numberInHousehold === 3){
     houseHoldPoints = 10;
   }  else if (numberInHousehold === 4){
     houseHoldPoints = 8;
   }  else if (numberInHousehold === 5){
     houseHoldPoints = 6;
   }  else if (numberInHousehold === 6){
     houseHoldPoints = 4;
   }  else if (numberInHousehold > 6){
     houseHoldPoints = 2;
   } else {
       console.log("not points updated");
   }
   
   return houseHoldPoints;
 }
 
const determineHouseholdSizePts = function(homeType) {
   let houseHoldSizePoints = 0;
 
    switch(homeType) {
        case 'large':
         houseHoldSizePoints += 10;
          break;
        case 'medium':
         houseHoldSizePoints += 7;
          break;
        case 'small':
         houseHoldSizePoints += 4;
          break;
        case 'apartment':
         houseHoldSizePoints += 2;
          break;
        default:
          console.log('Invalid home type');
    }
 
    return houseHoldSizePoints;
 }
 
 
 export {determineHouseholdPts, determineHouseholdSizePts}