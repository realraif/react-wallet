const defaultDiameter = 100;

export default (data, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  return options;
};

const getSerie = ({ name, percent, color }) => ({
  name: name,
  borderColor: color,
  data: [
    {
      radius: "100%",
      innerRadius: "100%",
      y: percent,
    },
  ],
});

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
      stickyTracking: false,
      linecap: "round",
      rounded: true,
    },
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
    borderWidth: 0,
    backgroundColor: "none",
    shadow: false,
    style: {
      fontSize: "12px",
    },
    pointFormatter: function () {
      var index = this.series.index;
      var color = this.series.chart.series[index - 1].points[0].color;

      return (
        `${this.series.name}<br>
        <span style="text-align: center; font-size:0.8rem; font-weight: bold;
        color: ${color};">${this.y}%</span>`
      );
    },
    positioner: function (labelWidth, lebelHeight) {
      return {
        x: (this.chart.chartWidth - labelWidth) / 2,
        y: (this.chart.plotHeight - lebelHeight) / 2,
      };
    },
  },
  series: [
    {
      name: "gaugeTube",
      borderWidth: "4px",
      enableMouseTracking: false,
      borderColor: "#20657b38",
      data: [
        {
          radius: "100%",
          innerRadius: "100%",
          y: 100,
        },
      ],
    },
  ],
});

const customiseOptions = (options, data, styles) => {
  data.sort((a, b) => {
    return b.percent - a.percent;
  });

  data.forEach((dataSeries) => {
    const serie = getSerie(dataSeries);
    options.series.push(serie);
  });

  if (styles.color) {
    options.plotOptions.series.borderColor = styles.borderColor;
  }

  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;
};
