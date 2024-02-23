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