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
    labels: {
      enabled: false,
    },
  },

  plotOptions: {
    solidgauge: {
      borderWidth: "8px",
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
    pointFormatter: function () {
      var color = this.series.chart.series[0].points[0].color;
      return `<span 
          style="text-align: center; font-size:0.8rem; color: ${color}; font-weight: bold">
            ${this.y}%
          </span>`;
    },
    positioner: function (labelWidth, labelHeight) {
      return {
        x: (this.chart.chartWidth - labelWidth) / 2,
        y: (this.chart.chartHeight - labelHeight) * 0.5,
      };
    },
  },

  series: [
    {
      name: "Move",
      borderColor: "pink",
      data: [
        {
          color: "pink",
          radius: "100%",
          innerRadius: "100%",
          y: 80,
        },
      ],
    },
  ],
});
