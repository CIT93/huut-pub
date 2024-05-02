class FP {
  constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, water, doubleWater) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterPoints = water;
    this.doubleWater = doubleWater;
    this.houseHoldPoints();
    this.houseHoldSizePoints();
    this.foodChoicePoints();
    this.foodSourcePoints();
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
      default:
        console.log("Invalid food choice");
    }
  }

  foodSourcePoints() {
    switch (this.foodSource) {
      case "packed":
        this.foodSourcePoints = 12;
        break;
      case "balance":
        this.foodSourcePoints = 6;
        break;
      case "local":
        this.houseHoldSizePoints = 2;
        break;
      default:
        console.log("Invalid food source");
    }
  }

  total() {
    if (this.doubleWater === "yes"){
      this.total =
      this.houseHoldPoints + this.houseHoldSizePoints + this.foodChoicePoints + this.foodSourcePoints + (this.waterPoints*2);
    }

    if (this.doubleWater === "" || this.doubleWater === "no"){
      this.total =
      this.houseHoldPoints + this.houseHoldSizePoints + this.foodChoicePoints + this.foodSourcePoints + this.waterPoints;
    }
  }
}

export { FP };
