import { loopIndexValue } from "utils";

export const getBarColors = (bars, colors) => {
  let colorIndex = 0;
  let colorDict = {};

  bars.forEach((bar) => {
    colorDict[bar] = colors[colorIndex];
    colorIndex = loopIndexValue(colorIndex, colors.length - 1);
  });
  return colorDict;
};

const groupedBarOptions = {
  margin: { top: 20, right: 20, bottom: 30, left: 40 },
  padding: 0.15,
  innerPadding: 1,
  borderRadius: 2,
  axisTop: null,
  axisRight: null,
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
  },
  animate: true,
  motionStiffness: 50,
  motionDamping: 8,
};

export const chartMethods = {
  onMouseEnter: (data, event) => {
    event.currentTarget.style.cursor = "pointer";
    event.currentTarget.style.strokeWidth = "5";
    event.currentTarget.style.opacity = "0.8";
  },
  onMouseLeave: (data, event) => {
    event.currentTarget.style.cursor = "auto";
    event.currentTarget.style.strokeWidth = "0";
    event.currentTarget.style.opacity = "1";
  },
};

export default groupedBarOptions;
