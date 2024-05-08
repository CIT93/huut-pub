export let comfortLevelScores = {
  sunny: { tShirt: 3, sweater: 1, trousers: 2, jeans: 3 },
  rainy: { tShirt: 1, sweater: 2, trousers: 3, jeans: 2 },
  cloudy: { tShirt: 2, sweater: 2, trousers: 2, jeans: 2 },
};

export let suitableScores = {
  casual: { tShirt: 3, sweater: 2, trousers: 1, jeans: 3 },
  formal: { tShirt: 1, sweater: 2, trousers: 3, jeans: 1 },
  work: { tShirt: 2, sweater: 3, trousers: 3, jeans: 2 },
};

export let clothes = [
  { type: "tShirt", status: "clean" },
  { type: "shirt", status: "clean" },
  { type: "suit", status: "clean" },
  { type: "sweater", status: "clean" },
  { type: "trousers", status: "dirty" },
  { type: "jeans", status: "clean" },
  { type: "tunic", status: "clean" },
  { type: "gipsy", status: "clean" },
];
  