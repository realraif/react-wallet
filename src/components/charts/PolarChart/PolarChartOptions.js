const defaultDiameter = 200;

export default (data, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    type: "column",
    polar: true,
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  yAxis: {
    maxPadding: 0,
    plotLines: [
      {
        zIndex: 4,
        color: "red",
        width: 1,
        value: 8,
      },
    ],
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
  tooltip: {
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      groupPadding: 0,
      borderWidth: 0.5,
      borderColor: "blue",
      shadow: true,
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
  options.series = [
    {
      name: "John",
      data: [5, 3, 4, 7, 2, 2, 1, 3, 4, 5, 2, 2],
    },
    {
      name: "Jane",
      data: [2, 2, 3, 2, 1, 3, 4, 4, 2, 2, 5, 2],
    },
    {
      name: "Joe",
      data: [3, 4, 4, 2, 5, 2, 3, 2, 1, 3, 4, 7],
    },
  ];
  options.xAxis.categories = [
    "Jan",
    "Fab",
    "March",
    "April",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  options.yAxis.labels.style = {
    textOutline: "1px contrast",
    color: "white",
  };
  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;
};
