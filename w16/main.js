import { renderTable } from "./render.js";
import { FORM, FNAME, LNAME, cfpData } from "./global.js";
import {saveLS} from "./storage.js";
import { FP } from "./fp.js";

const calculateAverageFootprintScore = (data) => {
  const totalScore = data.reduce((acc, fp) => acc + fp.total, 0);
  return totalScore / data.length;
};

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
FNAME.addEventListener("blur", validateInputField);
LNAME.addEventListener("blur", validateInputField);

addEventListener('submit', (e) => {
  const firstName = FORM.firstname.value.trim();
  const lastName = FORM.lastname.value.trim();

  validateInputField({ target: FORM.firstname });
  validateInputField({ target: FORM.lastname });

  if (firstName === "" || lastName === "") {
    e.preventDefault();
  } else {
    const householdMember = parseInt(FORM.householdMember.value);
    const householdSize = FORM.householdSize.value;
    const foodChoice = FORM.foodChoice.value;
    const foodSource = FORM.foodSource.value;
    const water = parseInt(FORM.water.value);
    const doubleWater = FORM.doubleWater.value;
    const householdPurchase = parseInt(FORM.householdPurchase.value);

    const fpObj = new FP(firstName, lastName, householdMember, householdSize, foodChoice, foodSource, water, doubleWater, householdPurchase);

    cfpData.push(fpObj);
    saveLS(cfpData);

    renderTable(cfpData);
    FORM.reset();
  }
})

const handleWaterSelectChange = () => {
  const waterSelect = document.getElementById("water");
  const doubleWaterSelect = document.getElementById("doubleWater");

  if (waterSelect.value === "0") {
    doubleWaterSelect.disabled = true;
  } else {
    doubleWaterSelect.disabled = false;
  }
};

document.getElementById("water").addEventListener("change", handleWaterSelectChange);

handleWaterSelectChange();

renderTable(cfpData);

export {calculateAverageFootprintScore, handleWaterSelectChange}