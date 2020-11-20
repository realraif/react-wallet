import Highcharts from "highcharts";
import { ColorLuminance } from "utils";

const defaultColor = "#4572A7";

export default (data, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    spacing: [0, 0, 0, 0],
    margin: [0, 40, 0, 0],
    backgroundColor: "rgba(0,0,0,0)",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "",
  },
  tooltip: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    visible: false,
    endOnTick: false,
  },
  xAxis: {
    visible: false,
  },
  plotOptions: {
    series: {
      softThreshold: false,
      lineWidth: 3,
      marker: {
        lineWidth: 3,
        radius: 1,
        lineColor: null, // inherit from series
        enabled: false,
      },
    },
  },
  series: [],
});

const customiseOptions = (options, data, styles) => {
  options.series = [{ type: "areaspline", data: confuigureSeries(data) }];
  handleNegativeValues(data, options);
  setChartColors(options, styles.color);
  options.chart.height = styles.height || 80;
};

const handleNegativeValues = (data, options) => {
  const lowestValue = Math.min(...data);
  if (lowestValue > 0) return;

  const highestValue = Math.max(...data);
  const tenPercent = (highestValue - lowestValue) / 10;
  options.plotOptions.series.threshold = lowestValue - tenPercent;
  options.plotOptions.series.softThreshold = true;
  options.yAxis.startOnTick = false;
};

const confuigureSeries = (data) => {
  let seriesData = [...data];
  let yValue = seriesData.pop();

  let lastItem = {
    y: yValue,
    marker: {
      radius: 5,
      enabled: true,
    },
  };

  seriesData.push(lastItem);
  return seriesData;
};

const setChartColors = (options, chartColor) => {
  let colors = getColors(chartColor || defaultColor);
  let series = options.series[0];
  let plotSeries = options.plotOptions.series;

  plotSeries.color = colors.lineColor;
  plotSeries.marker.lineColor = colors.lightColor;
  series.color = setLineGradient(colors);
  series.fillColor = setFillGradient(colors);
};

const setLineGradient = (colors) => ({
  linearGradient: { x1: 1, x2: 0, y1: 1, y2: 1 },
  stops: [
    [0, colors.lightColor],
    [1, colors.lineColor],
  ],
});

const setFillGradient = (colors) => ({
  linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
  stops: [
    [0, Highcharts.color(colors.lighterColor).setOpacity(0.3).get()],
    [1, Highcharts.color(colors.whiteColor).setOpacity(0.001).get()],
  ],
});

const getColors = (chartColor) => ({
  lineColor: chartColor,
  lightColor: ColorLuminance(chartColor, 0.2),
  lighterColor: ColorLuminance(chartColor, 0.4),
  whiteColor: ColorLuminance(chartColor, 1),
});
