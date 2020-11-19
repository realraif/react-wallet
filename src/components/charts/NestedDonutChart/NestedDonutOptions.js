import { loopIndexValue } from "utils";

const defaultDiameter = 200;
let isDonutClicked = false;

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
      slicedOffset: 10,
      allowPointSelect: true,
      cursor: "pointer",
      states: {
        select: {
          // color: "pink",
        },
      },
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
  options.series = [{ data: seriesData, allowDrillToNode: false }];

  if (styles.borderColor) {
    options.plotOptions.series.borderColor = styles.borderColor;
  }
  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;
};

const filterChildren = (allSelectedPoints, { id, parentId }) => {
  const hasChildren = !parentId;
  if (hasChildren) {
    unselectAllChildren(allSelectedPoints, id);
  } else {
    unselectParent(allSelectedPoints, parentId);
  }
};

const unselectAllChildren = (selectedSlices, parentId) => {
  selectedSlices.forEach((slice) => {
    if (slice.parent === parentId) {
      slice.select(false, true);
    }
  });
};

const unselectParent = (allSelectedPoints, parentId) => {
  allSelectedPoints.some((slice) => {
    const isParent = slice.id === parentId;
    if (isParent) {
      slice.select(false, true);
    }
    return isParent;
  });
};

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.point.events.unselect = function (e) {
    this.update({ sliced: false });
  };

  options.plotOptions.series.point.events.click = function (event) {
    isDonutClicked = true;
    setTimeout(() => {
      const hasSelectePoints = this.series.chart.getSelectedPoints().length;
      if (!hasSelectePoints) {
        callBackMethods.sliceClicked([], true);
        isDonutClicked = false;
      }
    });
  };

  options.plotOptions.series.point.events.select = function (event) {
    filterChildren(this.series.chart.getSelectedPoints(), {
      id: this.id,
      parentId: this.parent,
    });

    setTimeout(() => {
      const slicesData = getSelectedSlices(this.series.chart);
      callBackMethods.sliceClicked(slicesData, isDonutClicked);
      isDonutClicked = false;
    });
  };
};

const getSelectedSlices = (chart) => {
  const selectedSlices = chart.getSelectedPoints();
  const slicesData = selectedSlices.map((slice) => getSliceData(slice));
  return slicesData;
};

const getSliceData = ({ parent, value, name, id, info, series }) => {
  const chartTotal =
    series.__myTotal ||
    (series.__myTotal = series.data
      .map((p) => p.options.value || 0)
      .reduce((a, b) => a + b));
  const parentId = parent;

  const percentageFromTotal = ((value / chartTotal) * 100).toFixed(1);
  let percentageFromParent;
  if (parentId) {
    const parentValue = series.chart.get(parentId).value;
    percentageFromParent = ((value / parentValue) * 100).toFixed(1);
  }

  return {
    value,
    parentId,
    name,
    id,
    info,
    percentageFromTotal,
    percentageFromParent,
  };
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
