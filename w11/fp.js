class FP {
  constructor(first, last, houseMembers, houseSize) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.houseHoldPoints();
    this.houseHoldSizePoints();
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
  total() {
    this.total = this.houseHoldPoints + this.houseHoldSizePoints;
  }
}

export { FP };
