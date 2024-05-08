import { renderTable } from "./renderTable.js";
import { DecisionMaker } from "./decisionMaker.js";
import { clothes, comfortLevelScores, suitableScores } from "./sampleItems.js";

let recommendations = [];

const storedRecommendations = localStorage.getItem("recommendations");
if (storedRecommendations) {
  recommendations = JSON.parse(storedRecommendations);
  renderTable(recommendations);
}

const weatherDropdown = document.getElementById("weather");
const occasionDropdown = document.getElementById("occasion");
const laundryStatusDropdown = document.getElementById("laundryStatus");
const outfitForm = document.getElementById("outfitForm");

const weatherError = document.getElementById("weatherError");
const occasionError = document.getElementById("occasionError");

function clearError(element) {
  element.textContent = "";
}

weatherDropdown.addEventListener("change", function () {
  clearError(weatherError);
});

occasionDropdown.addEventListener("change", function () {
  clearError(occasionError);
});

outfitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const updatedComfortLevelScores = JSON.parse(localStorage.getItem("comfortLevelScores")) || comfortLevelScores;
  const updatedSuitableScores = JSON.parse(localStorage.getItem("suitableScores")) || suitableScores;

  const decisionMaker = new DecisionMaker(updatedComfortLevelScores, updatedSuitableScores);

  decisionMaker.topRecommendations = [];
  decisionMaker.bottomRecommendations = [];
  weatherError.textContent = "";
  occasionError.textContent = "";

  const weatherInput = weatherDropdown.value;
  const occasionInput = occasionDropdown.value;
  const laundryStatusInput = laundryStatusDropdown.value === "true";

  if (weatherInput === "") {
    weatherError.textContent = "Please select the weather.";
    return;
  }

  if (!occasionInput) {
    occasionError.textContent = "Please select the occasion.";
    return;
  }

  const availableClothes = decisionMaker.filterByLaundryStatus(
    clothes,
    laundryStatusInput
  );

  const comfortableClothes = decisionMaker.filterByWeather(
    availableClothes,
    weatherInput
  );

  decisionMaker.filterRecommendations(
    comfortableClothes,
    weatherInput,
    occasionInput
  );

  displayRecommendation(decisionMaker, occasionInput, weatherInput);

  outfitForm.reset();
});

const displayRecommendation = (decisionMaker, occasionInput, weatherInput) => {
  const topRecommendation =
    decisionMaker.topRecommendations.length > 0
      ? `${decisionMaker.topRecommendations[0].item.type} (Combined score: ${decisionMaker.topRecommendations[0].combinedScore})`
      : "No suitable tops found.";
  const bottomRecommendation =
    decisionMaker.bottomRecommendations.length > 0
      ? `${decisionMaker.bottomRecommendations[0].item.type} (Combined score: ${decisionMaker.bottomRecommendations[0].combinedScore})`
      : "No suitable bottoms found.";

  const recommendation = {
    weatherInput,
    occasionInput,
    topRecommendation,
    bottomRecommendation,
  };

  const storedRecommendations =
    JSON.parse(localStorage.getItem("recommendations")) || [];
  storedRecommendations.push(recommendation);
  localStorage.setItem("recommendations", JSON.stringify(storedRecommendations));

  renderTable(storedRecommendations);
};

document.getElementById("addClothingButton").addEventListener("click", addClothingItem);
document.getElementById("updateComfortScoresButton").addEventListener("click", updateComfortScores);
document.getElementById("updateSuitableScoresButton").addEventListener("click", updateSuitableScores);

function addClothingItem() {
    const typeInput = document.getElementById("type");
    const statusInput = document.getElementById("status");

    const type = typeInput.value;
    const status = statusInput.value;

    let clothesFromStorage = localStorage.getItem("clothes");
    
    if (clothesFromStorage) {
        let clothes = [];
        clothes = JSON.parse(clothesFromStorage);
    }

    clothes.push({ type, status });

    localStorage.setItem("clothes", JSON.stringify(clothes));

    typeInput.value = '';
    statusInput.value = 'clean'; 

    populateSelectElements();
    populateClothesList();
}

window.onload = function() {
  populateSelectElements();
  populateClothesList();
};

function updateComfortScores() {
  const updatedComfortLevelScores = JSON.parse(localStorage.getItem("comfortLevelScores")) || comfortLevelScores;

  const weatherInput = document.getElementById("weatherComfortScore");
  const typeComfortSelect = document.getElementById("typeComfort");
  const scoreInput = document.getElementById("scoreComfort");

  const weather = weatherInput.value;
  const type = typeComfortSelect.value;
  const score = parseInt(scoreInput.value);

  updatedComfortLevelScores[weather][type] = score;
  localStorage.setItem("comfortLevelScores", JSON.stringify(updatedComfortLevelScores));

  weatherInput.value = '';
  typeComfortSelect.value = '';
  scoreInput.value = '';
}

function updateSuitableScores() {
  const updatedSuitableScores = JSON.parse(localStorage.getItem("suitableScores")) || suitableScores;

const occasionInput = document.getElementById("occasionSuitableScore");
const typeSuitableSelect = document.getElementById("typeSuitable");
const scoreInput = document.getElementById("scoreSuitable");

const occasion = occasionInput.value;
const type = typeSuitableSelect.value;
const score = parseInt(scoreInput.value);

updatedSuitableScores[occasion][type] = score;
localStorage.setItem("suitableScores", JSON.stringify(updatedSuitableScores));

occasionInput.value = '';
typeSuitableSelect.value = '';
scoreInput.value = '';
}

function populateSelectElements() {
  let clothesFromStorage = localStorage.getItem("clothes");
  let clothes = [];
  if (clothesFromStorage) {
      clothes = JSON.parse(clothesFromStorage);
  }

  const typeComfortSelect = document.getElementById("typeComfort");
  typeComfortSelect.innerHTML = ""; // Clear previous options
  clothes.forEach(item => {
      const option = document.createElement("option");
      option.value = item.type;
      option.textContent = item.type;
      typeComfortSelect.appendChild(option);
  });

  const typeSuitableSelect = document.getElementById("typeSuitable");
  typeSuitableSelect.innerHTML = ""; // Clear previous options
  clothes.forEach(item => {
      const option = document.createElement("option");
      option.value = item.type;
      option.textContent = item.type;
      typeSuitableSelect.appendChild(option);
  });
}

function populateClothesList() {
  const clothesListDiv = document.getElementById("clothesList");
  let clothesFromStorage = localStorage.getItem("clothes");
  let clothes = [];
  if (clothesFromStorage) {
      clothes = JSON.parse(clothesFromStorage);
  }

  if (clothes.length > 0) {
      clothesListDiv.innerHTML = ""; // Clear previous content

      clothes.forEach(item => {
          const clothingItemDiv = document.createElement("div");
          clothingItemDiv.classList.add("clothing-item");
          clothingItemDiv.textContent = `${item.type}`;
          clothesListDiv.appendChild(clothingItemDiv);
      });
  } else {
      clothesListDiv.textContent = "No clothes found.";
  }
}