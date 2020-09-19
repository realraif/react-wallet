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
    pie: {
      size: "100%",
      slicedOffset: 0,
    },
    series: {
      allowPointSelect: true,
      cursor: "pointer",
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
  options.series = [
    {
      data: data,
      type: "sunburst",
      allowDrillToNode: true,
      levels: [
        {
          level: 1,
          colorByPoint: true
      },
      {
          level: 2,
          colorVariation: {
              key: 'brightness',
              to: -0.5
          }
        }
      ],
    },
  ];

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
