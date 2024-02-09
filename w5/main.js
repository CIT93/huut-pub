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

function start(houseHoldMembers, houseSize){
  const houseHoldPts = determineHouseholdPts(houseHoldMembers);
  console.log(houseHoldPts);

  const houseHoldSizePts = determineHouseholdSizePts(houseSize);
  console.log(houseHoldSizePts);

  const totalPts = houseHoldPts + houseHoldSizePts;

  const cfpObject = {
    memberInHouseHold : houseHoldMembers,
    sizeHouse: houseSize,
    househouseSPts : houseHoldSizePts,
    householdMPts: houseHoldPts,
    cfpTotal: totalPts
  }

  cfpData.push(cfpObject);

  // displayOutput(cfpObject);
  // cfpData.push([houseHoldMembers, houseSize, houseHoldPts, houseHoldSizePts, totalPts]);
}

function displayOutput(){
  for (obj of cfpData){
    console.log(obj);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `Cardon Footprint total is ${obj.cfpTotal}`;
    
    const newHouseHoldLi = document.createElement("li");
    newHouseHoldLi.textContent = `Number people in the house is ${obj.memberInHouseHold} with score ${obj.householdMPts}`;

    const newHouseHoldSizeLi = document.createElement("li");
    newHouseHoldSizeLi.textContent =  `${obj.sizeHouse} size of home with score ${obj.househouseSPts}`;

    output.appendChild(newP);
    output.appendChild(newHouseHoldLi);
    output.appendChild(newHouseHoldSizeLi);
  }
}

start(2, "small");
start(3, "medium");
start(4, "large");
start(5, "apartment");

displayOutput();