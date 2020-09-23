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
  legend: {
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  xAxis: {
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
      text: "Fruit units",
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " units",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      fillOpacity: 0.5,
      trackByArea: true,
      events: {},
    },
  },
  series: [],
});

const customiseOptions = (options, data, styles) => {
  options.series = data.dataSeries;
  options.xAxis.categories = data.labels;
};

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.events.click = function (event) {
    const serie = {
      x: event.point.x,
      y: event.point.y,
      label: event.point.category,
      name: event.point.series.name
    }
    callBackMethods.serieClickedHandler(serie);
  };
};
