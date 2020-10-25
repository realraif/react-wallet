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
        formatter: function () {
          const point = this.point;
          if (!point.parent) {
            return point.name;
          }
        },
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
  const seriesData = getSeriesData(data, styles.colors);
  options.series = [{ data: seriesData, allowDrillToNode: true }];

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
      const slicesData = selectedSlices.map((slice) => getSliceData(slice));
      callBackMethods.sliceClicked(slicesData);
    });
  };
};

const getSliceData = ({ value, parent, name, id, series }) => {
  const chartTotal =
    series.__myTotal ||
    (series.__myTotal = series.data
      .map((p) => p.options.value || 0)
      .reduce((a, b) => a + b));

  const percentage = ((value / chartTotal) * 100).toFixed(1);
  const group = parent && series.chart.get(parent);
  const total = group ? group.value : chartTotal;
  let percentageFromParent = ((value / total) * 100).toFixed(1);

  return { value, parent, name, id, percentage, percentageFromParent };
};

const getSeriesData = (data, colors) => {
  if (!colors) return [...data];
  let colorIndex = 0;

  return data.map((sliceData) => {
    let slice = { ...sliceData };
    if (!sliceData.parent) {
      slice.color = colors[colorIndex];
      colorIndex = loopIndexValue(colorIndex, colors.length - 1);
    }
    return slice;
  });
};
