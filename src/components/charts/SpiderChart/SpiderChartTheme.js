export default {
  axis: {
    ticks: {
      text: {
        fill: "gray",
      },
    },
  },
  grid: {
    line: {
      stroke: "gray",
      strokeDasharray: "6 4",
    },
  },
  crosshair: {
    line: {
      stroke: "gray",
      strokeDasharray: "",
    },
  },
  tooltip: {
    container: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#2d374d",
      color: "inherit",
      boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)",
      fontFamily: "monospace",
    },
  },
};
