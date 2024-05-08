export class DecisionMaker {
    constructor(updatedComfortLevelScores, updatedSuitableScores) {
        this.comfortLevelScores = updatedComfortLevelScores ;
        this.suitableScores = updatedSuitableScores;
        this.topRecommendations = [];
        this.bottomRecommendations = [];
      }
  
    calculateCombinedScore(item, weather, occasion) {
      return (
        (this.comfortLevelScores[weather][item.type] +
          this.suitableScores[occasion][item.type]) /
        2
      );
    }
  
    filterByLaundryStatus(clothes, laundryStatus) {
      const filteredClothes = [];
      for (const item of clothes) {
        if (
          (laundryStatus && item.status === "clean") ||
          (!laundryStatus && item.status === "dirty")
        ) {
          filteredClothes.push(item);
        }
      }
      return filteredClothes;
    }
  
    filterByWeather(clothes, weather) {
      const comfortableClothes = [];
      for (const item of clothes) {
        const comfortScore = this.comfortLevelScores[weather]?.[item.type];
        if (comfortScore && comfortScore > 0) {
          comfortableClothes.push(item);
        }
      }
      return comfortableClothes;
    }
  
    filterRecommendations(comfortableClothes, weatherInput, occasionInput) {
      for (const item of comfortableClothes) {
        const combinedScore = this.calculateCombinedScore(
          item,
          weatherInput,
          occasionInput
        );
        const isTopType = item.type === "tShirt" || item.type === "sweater";
  
        const meetsComfortAndSuitabilityForTop =
          combinedScore >= 2.5 &&
          (this.comfortLevelScores[weatherInput][item.type] >= 2 ||
            this.suitableScores[occasionInput][item.type] >= 2);
  
        const isBottomType = item.type === "trousers" || item.type === "jeans";
  
        const meetsComfortAndSuitabilityForBottom =
          combinedScore >= 2 &&
          this.suitableScores[occasionInput][item.type] >= 2 &&
          (!this.topRecommendations.length ||
            this.topRecommendations[0].item.type !== item.type);
  
        if (isTopType && meetsComfortAndSuitabilityForTop) {
          this.topRecommendations.push({ item, combinedScore });
        } else if (isBottomType && meetsComfortAndSuitabilityForBottom) {
          this.bottomRecommendations.push({ item, combinedScore });
        }
      }
    }
  }
  