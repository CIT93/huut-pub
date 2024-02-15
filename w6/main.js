const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

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

function start(firstname, lastname, houseHoldMembers, houseSize){
  const houseHoldPts = determineHouseholdPts(houseHoldMembers);
  console.log(houseHoldPts);

  const houseHoldSizePts = determineHouseholdSizePts(houseSize);
  console.log(houseHoldSizePts);

  const totalPts = houseHoldPts + houseHoldSizePts;

  const cfpObject = {
    firstName: firstname,
    lastName: lastname,
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
    const newP = document.createElement("p");
    newP.textContent = `Cardon Footprint total for ${obj.firstName} ${obj.lastName} is ${obj.cfpTotal}`;
    
    const newHouseHoldLi = document.createElement("li");
    newHouseHoldLi.textContent = `Number people in the house is ${obj.memberInHouseHold} with score ${obj.householdMPts}`;

    const newHouseHoldSizeLi = document.createElement("li");
    newHouseHoldSizeLi.textContent =  `${obj.sizeHouse} size of home with score ${obj.househouseSPts}`;

    OUTPUT.appendChild(newP);
    OUTPUT.appendChild(newHouseHoldLi);
    OUTPUT.appendChild(newHouseHoldSizeLi);
  }
}

displayOutput();

addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const householdMember = parseInt(FORM.householdMember.value);
  const householdSize = FORM.householdSize.value;

  start(firstName, lastName, householdMember, householdSize);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
})

//explain what happen in the eventListener
//By calling preventDefault on the event object (e), it stops the form from being submitted in the usual way, which is useful if we want to handle the submission manually.

// why do you think we got duplicates?
// Since the cfpData array wasn't reset after displaying the content, so each time submit the form, new data gets added to existing cfpData array, leading to duplicated entries when displaying output. It could be fixed by set the content of OUTPUT to "" or set cfpData.length = 0 after displayOutput()

// Is the apartment score correct? If not why not?
// It's not correct since FORM.householdMember.value will give us "number" as string instead of int as we expected. As a result, when passing parameter to function determineHouseholdPts(numberInHousehold), it first initializes the score is 0, then it cannot compare to any value, so it finally returns 0. => This is why score is 0

// Why are we doing all this work in the form?
// Firstly, ensure better UX since I assumes that user wouldn't know any values to enter in size of your home
// Secondly, ensure the data receiving from end users could be passed and handled in javascript correctly. Imagines that, users input something likes 'small house', it could be considered valid input, however, developer have to extract the necessary data which is 'small' to be used in JS
// Finally, easily to scale up the options + reduce efforts in validation. string has more complicated validation compared to options