const cfpData = [];

function determineHouseholdPts(numberInHousehold) {
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


function determineHouseholdSizePts(homeType) {
  let houseHoldSizePoints = 0;

   switch(homeType) {
       case 'large house':
        houseHoldSizePoints += 10;
         break;
       case 'medium house':
        houseHoldSizePoints += 7;
         break;
       case 'small house':
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

console.log("global scope");
// let cardonFootprintPoints = 0;

function start(houseHoldMembers, houseSize){
  const houseHoldPts = determineHouseholdPts(houseHoldMembers);
  console.log(houseHoldPts);

  const houseHoldSizePts = determineHouseholdSizePts(houseSize);
  console.log(houseHoldSizePts);

  const totalPts = houseHoldPts + houseHoldSizePts;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPts, houseHoldSizePts, totalPts]);
  console.log(cfpData);

  // does it make sense to have all of this in one array? in case just to store data without accessing it frequently, it might work. But to understand and maintain, I don't think we should have all of this in cfpData array.
  // If we put it into array, then it will push array into cfpData

}


function displayOutput(){

}

start([5, "apartment"]);
start([4, "large house"]);
start([4, "medium house"]);

// First note: minimize variables that can be accessible from anywhere in the code with "global scope". For e.g: cardonFootprintPoints could be use along the main.js. It somehow help us to avoid variable naming conflicts.
// Second note: statement is the first executable statement encountered by the interpreter after function declarations. That's why "global scope" is printed first.

displayOutput();