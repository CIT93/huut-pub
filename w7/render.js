const TBL = document.getElementById("tab-data");
const OUTPUT = document.getElementById("output");

function renderTable(data){
    OUTPUT.innerHTML = "";
    TBL.innerHTML = "";

    const table = createTableWithHeading();
    const tbody = document.createElement("tbody");
    
    data.forEach(obj => {
        const tr = document.createElement("tr");
        const trTextArr = [obj.firstName, obj.lastName, obj.memberInHouseHold, obj.sizeHouse, obj.cfpTotal];
    
        trTextArr.forEach(text => {
          const td = document.createElement("td");
          td.textContent = text;
          tr.appendChild(td);
        });
    
        const td = document.createElement("td");
        td.appendChild(createButton("Edit"));
        td.appendChild(createButton("Delete"));
        tr.appendChild(td);
    
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    TBL.appendChild(table);
  }
  
  function createTableWithHeading(){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    
    const headingTextArr = ["First Name", "Last Name", "Household Members", "House Size","Total Points", "Action"];
    const headingRow = createTableHeadingWithText(headingTextArr);
  
    thead.appendChild(headingRow);
    table.appendChild(thead);
  
    return table;
  }
  
  function createButton(text) {
    const button = document.createElement("button");
    button.textContent = text;
    return button;
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

  export {renderTable}