import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";
import {calculateAverageFootprintScore} from "./main.js";

const renderTable = (data) => {
  //OUTPUT.innerHTML = "";
  TBL.innerHTML = "";

  if(data.length){
    const table = createTableWithHeading();
    const tbody = fetchTableRow(data);
    table.appendChild(tbody);
    TBL.appendChild(table);   
    
    const averageRow = createAverageRow(data);
    TBL.appendChild(averageRow);
  }
}

const createTableWithHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");

  const headingTextArr = ["First Name", "Household Members", "House Size", "Food Choice", "Total Points", "Action"];
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

const fetchTableRow = (data) => {
  const tbody = document.createElement("tbody");

  data.forEach((obj, index) => {
    const tr = document.createElement("tr");

    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"];
    keys.forEach(key => {
      const td = document.createElement("td");
        if (key === "foodChoice") {
          td.textContent = obj["foodChoiceText"];
        } else {
          td.textContent = obj[key];
        }
        tr.appendChild(td);
    })
    
    const td = renderTableButton(index, data);
    tr.appendChild(td);

    tbody.appendChild(tr);
  });

  return tbody;
}

const renderTableButton = (index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del"
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener('click', (e) => {
    onUpdateTableAndLS(index, data);
  })

  // It first retrieves input elements from DOM with relative ids and store in inputData object
  // Then retrieves record to be edited from data array at specific index
  // Values of retrieved record are then assigned to corresponding input fields and being populated
  // When submit record, function removes old record from array 
  btnEdit.addEventListener('click', (e) => {
    const inputData = {
      firstname: document.getElementById("firstname"),
      lastname: document.getElementById("lastname"),
      householdMember: document.getElementById("householdMember"),
      householdSize: document.getElementById("householdSize"),
      foodChoice: document.getElementById("foodChoice")
    };

    const record = data[index];

    inputData.firstname.value = record.first;
    inputData.lastname.value = record.last;
    inputData.householdMember.value = record.houseMembers;
    inputData.householdSize.value = record.houseSize;
    inputData.foodChoice.value = record.foodChoice;

    onUpdateTableAndLS(index, data);
  });

  return td;
}


const onUpdateTableAndLS = (index, data) => {
  data.splice(index,1);
  saveLS(data);
  renderTable(data);
}

const createAverageRow = (data) => {
  const averageScore = calculateAverageFootprintScore(data);

  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.colSpan = 6; // Spanning across all columns

  td.textContent = `Average Footprint Score: ${averageScore.toFixed(2)}`; // Displaying average score with two decimal places
  tr.appendChild(td);

  return tr;
}

export { renderTable }