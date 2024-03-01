const TBL = document.getElementById("tab-data");
const OUTPUT = document.getElementById("output");

function renderTable(data) {
  OUTPUT.innerHTML = "";
  TBL.innerHTML = "";

  const table = createTableWithHeading();
  const tbody = fetchTableRow(data);
  table.appendChild(tbody);
  TBL.appendChild(table);

}

function createTableWithHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");

  const headingTextArr = ["First Name", "Household Members", "House Size", "Total Points", "Action"];
  const headingRow = createTableHeadingWithText(headingTextArr);

  thead.appendChild(headingRow);
  table.appendChild(thead);

  return table;
}

function createTableHeadingWithText(textArr) {
  const tr = document.createElement("tr");
  textArr.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  return tr;
}

function fetchTableRow(data) {
  const tbody = document.createElement("tbody");

  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "householdMPts" && key !== "househouseSPts") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTableButton(index, data);
    tr.appendChild(td);

    tbody.appendChild(tr);
  });

  return tbody;
}

function renderTableButton(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del"
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener('click', function(e) {
    data.splice(index, 1);
    renderTable(data);
  })

  // It first retrieves input elements from DOM with relative ids and store in inputData object
  // Then retrieves record to be edited from data array at specific index
  // Values of retrieved record are then assigned to corresponding input fields and being populated
  // When submit record, function removes old record from array 
  btnEdit.addEventListener('click', function(e) {
    const inputData = {
      firstname: document.getElementById("firstname"),
      lastname: document.getElementById("lastname"),
      householdMember: document.getElementById("householdMember"),
      householdSize: document.getElementById("householdSize"),
    };

    const record = data[index];

    inputData.firstname.value = record.firstName;
    inputData.lastname.value = record.lastName;
    inputData.householdMember.value = record.memberInHouseHold;
    inputData.householdSize.value = record.sizeHouse;

    data.splice(index, 1);
  });

  return td;
}

export { renderTable }