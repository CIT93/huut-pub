# My Understanding of the Code

## main.js
This is the main application logic for a form-based program that calculates and displays a Carbon Footprint Points (cfp) table.
- It first import 2 different modules: renderTable from "./render.js" and determineHouseholdPts, determineHouseholdSizePts from "./carbonFootprint.js"
- start(firstname, lastname, houseHoldMembers, houseSize): It calculates the household points and total points based on the number of household members and the house size, then creates a cfp data object and pushes it to the cfpData array.
- addEventListener('submit', function(e) {...}): It is an event listener for the 'submit' event of the form. When the form is submitted, it prevents the default form submission behavior, then gets the values of the form fields, calls the start function with these values to calculate and store the cfp data, then it calls renderTable with cfpData to display the table, and finally it resets the form.

## carbonFootprint.js
It defines two functions and exports: determineHouseholdPts() and determineHouseholdSizePts()
- determineHouseholdPts():
  - It takes a single parameter numberInHousehold, representing the number of people in a household. And returns the calculated houseHoldPoints
- determineHouseholdSizePts():
  - It takes a single parameter homeType, representing the type of home (large, medium, small, or apartment) and returns the calculated houseHoldSizePoints

## render.js
It generates and displays a table in an HTML document dynamically, based on the given data array of objects. The table will be displayed in the HTML element with the id "tab-data".
- renderTable(data):
  - It takes an array of data objects as input and constructs a table with the data. It first clears the innerHTML of OUTPUT and TBL, then it creates a new table element with headings by calling createTableWithHeading(). It creates a tbody element and for each object in the data array, it creates a new row (tr), and for each property of the object, it creates a new cell (td). Then it creates two buttons "Edit" and "Delete" and adds them to the last cell of each row. Finally, it appends the tbody to the table and the table to TBL.
- Helper function:
  - createTableWithHeading(): it creates a new table element with a thead element, and calls createTableHeadingWithText(headingTextArr) function to create a tr element with th elements for each heading text. The tr is then appended to thead, and the thead is appended to the table.
  - createButton(text): it creates a new button element with the specified text.
  - createTableHeadingWithText(textArr): It creates a new row (tr) and for each text in the provided text array, it creates a new heading cell (th) and appends it to the row.

## My feedback
This section was incredibly helpful and will reference it again.
Through this section, I could see that it's better for us to practice psudo code before actually implementing something in technical side.