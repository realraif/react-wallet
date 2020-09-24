export default (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  setEvents(options, callBackMethods);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    type: "areaspline",
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  legend: { enabled: false },
  xAxis: {
    crosshair: true,
    plotBands: [
      {
        from: 4.5,
        to: 5.5,
        color: "rgba(68, 170, 213, .2)",
      },
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  tooltip: {
    shared: true,
    enabled: false
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointPlacement: "on",
      marker: {
        enabled: false,
        states: {
          hover: { enabled: true },
        },
      },
      fillOpacity: 0.5,
      trackByArea: true,
      events: {},
    },
  },
  series: [],
});

const customiseOptions = (options, data, styles) => {
  options.series = data.series;
};

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.events.click = function (event) {
    const serie = {
      x: event.point.x,
      y: event.point.y,
      label: event.point.category,
      name: event.point.series.name,
    };
    callBackMethods.serieClickedHandler(serie);
  };
};
