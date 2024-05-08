## First solution: Have 2 separate dropdown, 1 for dishwasher water consumption and one for washing machine. Based on user input, then calculate it.

## Second solution: Only 1 dropdown to receive user input and 1 checkbox which is based on the value of dropdown. In case checkbox is enabled, then calculate twice. Otherwise, not calculate.

## Recycle: 
When the form is submitted or edited, capture the state of each checkbox to determine which types of waste are being recycled by using querySelectorAll class recycle that has been checked
For each items checked, it will be removed by 4 out of total score
- Update HTML to include checkboxes for each type of waste
- Modify main.js to return the state of checkboxes and score
- pass that object to class FP and calculate total.
