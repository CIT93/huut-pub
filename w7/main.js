import { renderTable } from "./render.js";
import {determineHouseholdPts, determineHouseholdSizePts} from "./carbonFootprint.js"

const FORM = document.getElementById("form");

const cfpData = [];

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
}

addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const householdMember = parseInt(FORM.householdMember.value);
  const householdSize = FORM.householdSize.value;

  start(firstName, lastName, householdMember, householdSize);
  renderTable(cfpData);
  FORM.reset();
})

//TBL is not defined since it was first declared in main.js instead of module render.js

// In my opinion, the issue we're facing is likely because cfpData is declared in the main.js file, and it is not accessible in the render.js module where renderTable is defined. Each module in JavaScript has its own scope, and variables declared in one module are not automatically accessible in another.