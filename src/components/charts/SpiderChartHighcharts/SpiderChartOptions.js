const defaultDiameter = 200;

export default (data, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    type: "area",
    polar: true,
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  yAxis: {
    gridLineInterpolation: "polygon",
    maxPadding: 0,
    tickInterval: 1,
    gridZIndex: 4,
    min: 0,
    title: {
      text: "",
    },
    labels: {},
    stackLabels: {
      enabled: false,
    },
  },
  tooltip: false,
  plotOptions: {
    series: {
      pointPadding: 0,
      groupPadding: 0,
      borderWidth: 0.5,
      lineWidth: 0,
      marker: {
        enabled: false,

        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
    column: {
      stacking: "normal",
      dataLabels: {
        enabled: false,
      },
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    visible: false,
  },
  series: [
    {
      name: "John",
      data: [5, 3, 4, 7, 2],
    },
    {
      name: "Jane",
      data: [2, 2, 3, 2, 1],
    },
    {
      name: "Joe",
      data: [3, 4, 4, 2, 5],
    },
  ],
});

const customiseOptions = (options, data, styles) => {
  // options.series = data.series;
  // options.xAxis.categories = data.categories;
  options.yAxis.labels.style = {
    textOutline: "1px contrast",
    color: "white",
  };
  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;
};
