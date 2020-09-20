const defaultDiameter = 100;

export default (data, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    height: defaultDiameter,
    width: defaultDiameter,
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
    minorTicks: false,
    minorTickInterval: 3,
    minorTickWidth: 1,
    minorTickColor: "rgb(162, 117, 208)",
    minorTickLength: 2,
    labels: {
      enabled: false,
    },
  },

  plotOptions: {
    solidgauge: {
      borderWidth: "6px",
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

  tooltip: {
    borderWidth: 0,
    backgroundColor: "none",
    shadow: false,
    style: {
      fontSize: "5px",
    },
    pointFormatter: function () {}
  },

  series: [
    {
      borderColor: "#20657b",
      data: [
        {
          color: "#20657b",
          radius: "100%",
          innerRadius: "100%",
          y: 80,
        },
      ],
    },
    {
      name: "gaugeTube",
      borderWidth: "4px",
      enableMouseTracking: false,
      borderColor: "#20657b38",
      data: [
        {
          color: "#20657b38",
          radius: "100%",
          innerRadius: "100%",
          y: 100,
        },
      ],
    },
  ],
});

const customiseOptions = (options, data, styles) => {
  let serie = options.series[0].data[0];
  serie.y = data.percentage;
  serie.name = data.name;

  if (styles.color) {
    options.plotOptions.series.borderColor = styles.borderColor;
  }

  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;
};
