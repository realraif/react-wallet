import { loopIndexValue } from "utils";

const defaultDiameter = 200;

export default (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  setEvents(options, callBackMethods);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    type: "sunburst",
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  colorAxis: {},
  legend: {
    enabled: false,
  },
  tooltip: false,
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: "pointer",
      levels: [
        {
          level: 1,
          colorByPoint: true,
        },
        {
          level: 2,
          colorVariation: {
            key: "brightness",
            to: -0.5,
          },
        },
      ],
      dataLabels: {
        enabled: false,
      },
      point: {
        events: {},
      },
    },
  },
  credits: {
    enabled: false,
  },
  series: [],
});

const customiseOptions = (options, data, styles) => {
  options.series = [{ data: data, allowDrillToNode: true }];

  if (styles.colors) {
    setColors(options.series[0].data, styles.colors);
  }
  if (styles.borderColor) {
    options.plotOptions.series.borderColor = styles.borderColor;
  }

  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;
};

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.point.events.select = function (event) {
    setTimeout(() => {
      const selectedSlices = this.series.chart.getSelectedPoints();
      callBackMethods.setSelectedSlices(selectedSlices);
    });
  };
};

const setColors = (data, colors) => {
  let colorIndex = 0;

  data.forEach((slice) => {
    if (!slice.parent) {
      slice.color = colors[colorIndex];
      colorIndex = loopIndexValue(colorIndex, colors.length - 1);
    }
  });
};
