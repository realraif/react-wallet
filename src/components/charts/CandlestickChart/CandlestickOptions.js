export default (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  setEvents(options, callBackMethods);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    zoomType: "x",
  },
  rangeSelector: {
    selected: 1,
  },
  title: {
    text: "AAPL Historical",
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
  yAxis: [
    {
      labels: {
        align: "right",
        x: -3,
      },
      title: {
        text: "OHLC",
      },
      height: "60%",
      lineWidth: 2,
      resize: {
        enabled: true,
      },
    },
    {
      labels: {
        align: "right",
        x: -3,
      },
      title: {
        text: "Volume",
      },
      top: "65%",
      height: "35%",
      offset: 0,
      lineWidth: 2,
    },
  ],
  tooltip: {
    split: true,
  },
});

const groupingUnits = [
  [
    "week", // unit name
    [1], // allowed multiples
  ],
  ["month", [1, 2, 3, 4, 6]],
];

const getSeries = ({ candlestick, column }) => {
  return [
    {
      type: "candlestick",
      name: candlestick.name,
      data: candlestick.data,
      dataGrouping: {
        units: groupingUnits,
      },
    },
    {
      type: "column",
      name: column.name,
      data: column.data,
      yAxis: 1,
      color: "silver",
      dataGrouping: {
        units: groupingUnits,
      },
    },
  ];
};

const customiseOptions = (options, data, styles) => {
  options.series = getSeries(data);
};

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
};
