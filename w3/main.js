// Options for the dropdowns
const peopleOptions = [
   { value: '', text: '--Please choose an option--' },
   { value: '1', text: '1' },
   { value: '2', text: '2' },
   { value: '3', text: '3' },
   { value: '4', text: '4' },
   { value: '5', text: '5' },
   { value: '6', text: '6' },
   { value: '7', text: 'More than 6' },
  ];
  
  const homeSizeOptions = [
   { value: '', text: '--Please choose an option--' },
   { value: 'large house', text: 'Large house' },
   { value: 'medium house', text: 'Medium-sized house' },
   { value: 'small house', text: 'Small house' },
   { value: 'apartment', text: 'Apartment' },
  ];
  
  // Function to generate options for a select element
  function generateOptions(selectElement, options) {
   options.forEach(option => {
     let optionElement = document.createElement('option');
     optionElement.value = option.value;
     optionElement.text = option.text;
     selectElement.add(optionElement);
   });
  }
  
// Generate options for the dropdowns
generateOptions(document.getElementById('people'), peopleOptions);
generateOptions(document.getElementById('homeSize'), homeSizeOptions);

function calculateHouseholdImpact(peopleCount) {
   peopleCount = Number(peopleCount);
 
   if (peopleCount === 1) return 14;
   else if (peopleCount === 2) return 12;
   else if (peopleCount === 3) return 10;
   else if (peopleCount === 4) return 8;
   else if (peopleCount === 5) return 6;
   else if (peopleCount === 6) return 4;
   else if (peopleCount >= 7) return 2;
   else return 0;
}

function calculateHomeSizeImpact(homeSize) {
   switch(homeSize) {
       case 'large house':
           return 10;
       case 'medium house':
           return 7;
       case 'small house':
           return 4;
       case 'apartment':
           return 2;
       default:
           return 0;
   }
}

function calculateTotalPoints() {
   // Get user inputs
   let peopleCount = document.getElementById('people').value;
   let homeSize = document.getElementById('homeSize').value;
 
   // Only continue if both fields have values
   if (!peopleCount || !homeSize) {
      document.getElementById('totalPoints').innerHTML = 'Please select both fields to see your Carbon Footprint Points.';
      return;
  }

   // Calculate footprint points
   let householdImpact = calculateHouseholdImpact(peopleCount);
   let homeSizeImpact = calculateHomeSizeImpact(homeSize);

   // Display total points
   document.getElementById('totalPoints').innerHTML = 'Total Carbon Footprint Points: ' + (householdImpact + homeSizeImpact);
}

document.getElementById('people').onchange = function() {
   // Enable home size dropdown if a valid option is selected
   if (this.value) {
       document.getElementById('homeSize').disabled = false;
   }

   // Recalculate total points
   calculateTotalPoints();
}

document.getElementById('homeSize').onchange = calculateTotalPoints;