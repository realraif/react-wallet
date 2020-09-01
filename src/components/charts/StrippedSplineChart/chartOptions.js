
import Highcharts from "highcharts";


export default ( data, styles ) => {
  const lineColor = styles.color ? styles.color : "#4572A7";
  
  const options = getGenericOptions();
  customiseOptions(options, data, lineColor, styles.height);

  return options;
}

const getGenericOptions = () => ({
  chart: {
    spacing: [0, 0, 0, 0],
    margin: [0, 40, 0, 0]
  },
  credits: {
      enabled: false
  },
  title: {
    text: ''
  },
  tooltip: {
      enabled: false
  },
  legend: {
  	enabled: false
  },
  yAxis: {
      visible: false,
      endOnTick: false
  },
  xAxis: {
      visible: false
  },
  plotOptions: {
    series: {
      lineWidth: 3,
      marker: {
        lineWidth: 3,
        radius: 1,
        lineColor: null, // inherit from series
        enabled: false
      }
    }
  },
  series: [{
    type: 'areaspline',
    data: []
  }]
});


function setLastItemOptions(data) {
  let chartTrend = [...data];
  let yValue = chartTrend.pop();
  let lastItem = {
    y: yValue,
    marker: {
      fillColor: "#FFFFFF",
      radius: 5,
      enabled: true,
    },
  };
  chartTrend.push(lastItem);
  return chartTrend;
}

function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

const customiseOptions = (options, data, lineColor, height) => {
  data = setLastItemOptions(data);
  const lightColor = ColorLuminance(lineColor, 0.2);
  const lighterColor = ColorLuminance(lineColor, 0.4);
  const whiteColor = ColorLuminance(lineColor, 1);

  var series = options.series[0];
  var plotSeries = options.plotOptions.series;

  plotSeries.color = lineColor;
  plotSeries.marker.lineColor = lightColor;

  if (height) {
    options.chart.height = height;
  }

  series.data = data;
  series.color = {
    linearGradient: { x1: 1, x2: 0, y1: 1, y2: 1 },
    stops: [
      [0, lightColor],
      [1, lineColor],
    ],
  };
  series.fillColor = {
    linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
    stops: [
      [0, Highcharts.color(lighterColor).setOpacity(0.3).get()],
      [1, Highcharts.color(whiteColor).setOpacity(0.001).get()],
    ],
  };
};
