export default (data, styles) => {
  const options = getGenericOptions();
  return options;
};

const getGenericOptions = () => ({
  chart: {
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    height: 70,
    type: "solidgauge",
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },

  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        backgroundColor: "transparent",
        borderWidth: 0,
      },
    ],
  },

  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    backgroundColor: "transparent",
    tickLength: 0,
    minorTicks: true,
    minorTickInterval: 3,
    minorTickWidth: 1,
    minorTickColor: "pink",
    minorTickLength: 2,
    tickPositions: [100],
  },

  plotOptions: {
    solidgauge: {
      borderWidth: "40px",
      dataLabels: {
        enabled: false,
      },

      linecap: "round",
      stickyTracking: false,
      rounded: true,
    },
  },
  credits: {
    enabled: false,
  },

  series: [
    {
      name: "Move",

      borderColor: "pink",
      borderWidth: "5px",
      data: [
        {
          color: "green",
          radius: "100%",
          innerRadius: "100%",
          y: 80,
        },
      ],
    },
  ],
});
