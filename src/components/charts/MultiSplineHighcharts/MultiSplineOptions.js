export default (data, selectedId, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, selectedId, styles);
  setEvents(options, callBackMethods);
  return options;
};

const defaultColor = "rgb(185 184 184 / 23%)";

const getGenericOptions = () => ({
  chart: {
    type: "spline",
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
    crosshair: true,
    gridLineDashStyle: "longdash",
    title: {
      text: "",
    },
  },
  tooltip: {
    shared: true,
    enabled: true,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      color: defaultColor,
      pointPlacement: "on",
      marker: {
        enabled: false,
        symbol: "circle",
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

const customiseOptions = (options, data, selectedId, styles) => {
  options.series = data.map((serie, i) => {
    let serieOptions = {};
    if (serie.id === selectedId) {
      serieOptions = {
        color: styles.selectedColor,
        type: "areaspline",
        lineWidth: 0,
      };
    }
    return { ...serie, ...serieOptions };
  });
  debugger;
  options.chart.height = styles.height;
};

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.events.click = function (event) {
    const serie = {
      name: event.point.series.name,
      time: event.point.x,
      value: event.point.y,
    };
    callBackMethods.serieClickedHandler(serie);
  };
};
