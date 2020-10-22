export default (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  setEvents(options, callBackMethods);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    zoomType: "x",
    backgroundColor: "transparent",
  },
  rangeSelector: {
    selected: 1,
  },
  title: {
    text: "",
  },
  plotOptions: {
    series: {
      events: {},
    },
    candlestick: {
      color: "#7cb5ec",
      lineColor: "#2f7ed8",
      upLineColor: "silver",
      upColor: "silver",
    },
  },
  xAxis: {
    events: {},
  },
  yAxis: [
    {
      labels: {
        align: "right",
        x: -3,
      },
      title: {
        text: "OHLC",
      },
      lineWidth: 2,
      resize: {
        enabled: true,
      },
    },
  ],
});

const groupingUnits = [
  [
    "week", // unit name
    [1], // allowed multiples
  ],
  ["month", [1, 2, 3, 4, 6]],
];

const getSeries = (candlestickData) => {
  return [
    {
      type: "candlestick",
      name: "OHLC",
      data: candlestickData,
      dataGrouping: {
        units: groupingUnits,
      },
    },
  ];
};

const customiseOptions = (options, data, styles) => {
  options.series = getSeries(data);
};

const isEqualFullRange = ({ min, max, dataMin, dataMax }) => {
  return min === dataMin && max === dataMax;
};

let setExtremesTimeout;

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.events.click = function (event) {
    const serie = {
      x: event.point.x,
      y: event.point.y,
      label: event.point.category,
      name: event.point.series.name,
    };
    callBackMethods.candleClickedHandler(serie);
  };
  options.xAxis.events.afterSetExtremes = function (event) {
    const axis = this;
    clearTimeout(setExtremesTimeout);
    setExtremesTimeout = setTimeout(() => {
      const isFullRange = isEqualFullRange(axis);
      const range = {
        trigger: event.trigger,
        min: axis.min,
        max: axis.max,
        isFullRange,
      };
      callBackMethods.zoomEventHandler(range);
    }, 300)
  };
};
