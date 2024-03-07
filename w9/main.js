import { renderTable } from "./render.js";
import {determineHouseholdPts, determineHouseholdSizePts} from "./carbonFootprint.js";
import { FORM } from "./global.js";
import {saveLS, cfpData} from "./storage.js";

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

const validateInputField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
document.getElementById("firstname").addEventListener("blur", validateInputField);
document.getElementById("lastname").addEventListener("blur", validateInputField);

addEventListener('submit', function(e){
  const firstName = FORM.firstname.value.trim();
  const lastName = FORM.lastname.value.trim();

  validateInputField({ target: FORM.firstname });
  validateInputField({ target: FORM.lastname });

  if (firstName === "" || lastName === "") {
    e.preventDefault();
  } else {
    const householdMember = parseInt(FORM.householdMember.value);
    const householdSize = FORM.householdSize.value;
    start(firstName, lastName, householdMember, householdSize);
  
    saveLS(cfpData);

    renderTable(cfpData);
    FORM.reset();
  }
})


renderTable(cfpData);