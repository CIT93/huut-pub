const TBL = document.getElementById("recommendationsTable");

export function renderTable(recommendations) {
    TBL.innerHTML = "";

    const table = createTableWithHeading();
    const tableBody = document.createElement("tbody");

    recommendations.forEach((recommendation) => {
        const row = createTableRow(recommendation);
        tableBody.appendChild(row);
        table.appendChild(tableBody);
        TBL.appendChild(table);  
    }); 
}

const createTableWithHeading = () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
  
    const headingTextArr = ["Weather", "Occasion", "Top Recommendation", "Bottom Recommendation", "Action"];
    const headingRow = createTableHeadingWithText(headingTextArr);
  
    thead.appendChild(headingRow);
    table.appendChild(thead);
  
    return table;
  }
  
  const createTableHeadingWithText = (textArr) => {
    const tr = document.createElement("tr");
    textArr.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    return tr;
  }

function createTableRow(recommendation) {
    const { weatherInput, occasionInput, topRecommendation, bottomRecommendation } = recommendation;

    const row = document.createElement("tr");

    const weatherCell = document.createElement("td");
    weatherCell.textContent = weatherInput;
    row.appendChild(weatherCell);

    const occasionCell = document.createElement("td");
    occasionCell.textContent = occasionInput;
    row.appendChild(occasionCell);

    const topCell = document.createElement("td");
    topCell.textContent = topRecommendation;
    row.appendChild(topCell);

    const bottomCell = document.createElement("td");
    bottomCell.textContent = bottomRecommendation;
    row.appendChild(bottomCell);

    const actionCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.addEventListener("click", () => {
        handleEditRecommendation(recommendation, row);
    });
    actionCell.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        handleDeleteRecommendation(recommendation, row);
    });
    actionCell.appendChild(deleteButton);

    row.appendChild(actionCell);

    return row;
}

function handleEditRecommendation(recommendation, row) {
    populateForm(recommendation)
    row.remove();
    removeRecommendationFromLocalStorage(recommendation);
    updateRecommendationInLocalStorage(recommendation);
}

function handleDeleteRecommendation(recommendation, row) {
    row.remove();
    removeRecommendationFromLocalStorage(recommendation);

    const remainingRecommendations = document.querySelectorAll("#recommendationsTable tbody tr");
    if (remainingRecommendations.length === 0) {
        TBL.innerHTML = "";
    }
}

function populateForm(recommendation) {
    const weatherDropdown = document.getElementById("weather");
    const occasionDropdown = document.getElementById("occasion");
    const laundryStatusDropdown = document.getElementById("laundryStatus");

    weatherDropdown.value = recommendation.weatherInput;
    occasionDropdown.value = recommendation.occasionInput;
    laundryStatusDropdown.value = recommendation.topRecommendation ? "true" : "false";
}

function updateRecommendationInLocalStorage(updatedRecommendation) {
    let storedRecommendations = JSON.parse(localStorage.getItem("recommendations")) || [];
    storedRecommendations = storedRecommendations.map(recommendation => {
        if (isEqual(recommendation, updatedRecommendation)) {
            return updatedRecommendation;
        } else {
            return recommendation;
        }
    });
    localStorage.setItem("recommendations", JSON.stringify(storedRecommendations));
}

function removeRecommendationFromLocalStorage(deletedRecommendation) {
    let storedRecommendations = JSON.parse(localStorage.getItem("recommendations")) || [];
    storedRecommendations = storedRecommendations.filter(recommendation => !isEqual(recommendation, deletedRecommendation));
    localStorage.setItem("recommendations", JSON.stringify(storedRecommendations));
}

function isEqual(item1, item2) {
    return JSON.stringify(item1) === JSON.stringify(item2);
}