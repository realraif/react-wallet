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
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
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
});

const customiseOptions = (options, data, styles) => {
  options.series = data.series;
  options.xAxis.categories = data.categories;
  options.yAxis.labels.style = {
    textOutline: "1px contrast",
    color: "white",
  };
  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;
};
