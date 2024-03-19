class FP {
  constructor(first, last, houseMembers, houseSize, foodChoice) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.houseHoldPoints();
    this.houseHoldSizePoints();
    this.foodChoicePoints();
    this.total();
  }
  houseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    } else {
      console.log("not points updated");
    }
  }

  houseHoldSizePoints() {
    switch (this.houseSize) {
      case "large":
        this.houseHoldSizePoints = 10;
        break;
      case "medium":
        this.houseHoldSizePoints = 7;
        break;
      case "small":
        this.houseHoldSizePoints = 4;
        break;
      case "apartment":
        this.houseHoldSizePoints = 2;
        break;
      default:
        console.log("Invalid home type");
    }
  }

  foodChoicePoints() {
    switch (this.foodChoice) {
      case "meatDaily":
        this.foodChoiceText = "Domestic meat daily basic";
        this.foodChoicePoints = 10;
        break;
      case "meatFewTimes":
        this.foodChoiceText = "Domestic meat few times per week";
        this.foodChoicePoints = 8;
        break;
      case "vegetarian":
        this.foodChoiceText = "Vegetarian";
        this.foodChoicePoints = 4;
        break;
      case "vegetarianOrWild":
        this.foodChoiceText = "Vegan or only eat wild meat";
        this.foodChoicePoints = 2;
        break;
      case "prepackageFood":
        this.foodChoiceText = "Prepackaged convenience food";
        this.foodChoicePoints = 12;
        break;
      default:
        console.log("Invalid food choice");
    }
  }

  total() {
    this.total =
      this.houseHoldPoints + this.houseHoldSizePoints + this.foodChoicePoints;
  }
}

export { FP };
