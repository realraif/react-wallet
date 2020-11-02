import tinycolor from "tinycolor2";

const defaultDiameter = 200;

export default (data, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data);
  customiseStyles(options, styles);
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
    tickInterval: 2,
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
    enabled: false,
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      groupPadding: 0,
      borderWidth: 1.5,
    },
    column: {
      colorByPoint: true,
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

const customiseOptions = (options, data) => {
  options.series = data.series;
  options.xAxis.categories = data.categories;
};

const customiseStyles = (options, styles) => {
  options.yAxis.labels.style = {
    textOutline: "1px contrast",
    color: "white",
  };
  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;

  options.colors = styles.colors.map((color) => ({
    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    stops: [
      [0, color],
      [1, tinycolor(color).darken(15).toHexString()],
    ],
  }));
};
