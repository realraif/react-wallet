export default (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  return options;
};

const getGenericOptions = () => ({
  rangeSelector: {
    selected: 1,
  },

  title: {
    text: "AAPL Historical",
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
      dataGrouping: {
        units: groupingUnits,
      },
    },
  ];
};

const customiseOptions = (options, data, styles) => {
  options.series = getSeries(data);
};
