## New version of App Name: OutfitSelector - need further approval
### Description of Purpose: 
- This app is designed to choose an outfit for the day by considering weather, occasion, and a user-defined comfort level. The outfit will rely on predefined clothing categories.

### Variables:
- weather (string - input): Represent the current weather condition. This will be defined by user.
- occasion (string - input): Represent the planned activity for the day. Values could be 'Work', 'Casual', 'Formal'.
- laundryStatus (boolean - input): Represent whether user has limited laundry options or not. True represents limited laundry options which means mostly dirty clothes, and False represents user can wear anything.
- totalCombinedScore (number): This is the addition between comfortLevelScore and suitableScore
- comfortLevelScore (object - predefined values): Represent the desired comfort level
- suitableScore (object - predefined values): Represent the suitable score for each clothes

### Decision Making Process:
- Step 1: Filter clothes based on laundry status. It should return array of available clothes.

- Step 2: Filter based on Weather
  - At this step, the list of available clothes will go through the second filter so the app could return list of clothing categories based on weather

- Step 3: Matching with Occasion
  - At this step, loop through the filtered clothes. For each clothing item, it will take the corresponding suitability score from predefined suitableScore object.

- Step 4: Get the comfort score for current weather condition.
  - Will use predefined comfortLevelScore object to find the clothing item type with corresponding comfort score based on weather

- Step 5: Calculate combine score
  - Add the comfort score and suitability score to get final combined score for each clothing item in filtered list. Then sorting by score in descending order.

- Step 6: Recommend for user
  - Based on the highest combined scores for top, bottoms and shoes, find the most suitable outfit clothes for user's input.

### Calculation:
- As mentioned in step 5, it will be the simple addition to calculate the final combined score for each clothing item.

### Output:
console.log(`Recommended outfit for ${occasion} on a ${weather} day:`);
console.log(`  - Top: ${recommendedTop.item.type}`);
console.log(`  - Bottom: ${recommendedBottom.item.type}`);
console.log(`  - Shoes: ${recommendedShoes.item.type}`);