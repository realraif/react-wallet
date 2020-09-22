import { loopIndexValue } from "utils";

export const data = [
  {
    time: "april",
    card1: 62,
    card2: 59,
    card3: 66,
    card4: 147,
    card5: 84,
    card6: 124,
  },
  {
    time: "may",
    card1: 144,
    card2: 64,
    card3: 172,
    card4: 195,
    card5: 112,
    card6: 7,
  },
  {
    time: "june",
    card1: 90,
    card2: 124,
    card3: 8,
    card4: 173,
    card5: 180,
    card6: 121,
  },
  {
    time: "july",
    card1: 197,
    card2: 144,
    card3: 26,
    card4: 28,
    card5: 60,
    card6: 60,
  },
  {
    time: "august",
    card1: 58,
    card2: 136,
    card3: 36,
    card4: 38,
    card5: 88,
    card6: 63,
  },
  {
    time: "september",
    card1: 138,
    card2: 107,
    card3: 120,
    card4: 191,
    card5: 35,
    card6: 7,
  },
  {
    time: "october",
    card1: 78,
    card2: 55,
    card3: 129,
    card4: 36,
    card5: 29,
    card6: 146,
  },
];

export const bars = ["card1", "card2", "card3", "card4", "card5", "card6"];

export const getBarColors = (colors) => {
  let colorIndex = 0;
  let colorDict = {};

  bars.forEach((bar) => {
    colorDict[bar] = colors[colorIndex];
    colorIndex = loopIndexValue(colorIndex, colors.length - 1);
  });
  return colorDict;
};
