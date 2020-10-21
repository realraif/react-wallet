const defaultDiameter = 200;

export default (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  setEvents(options, callBackMethods);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    type: "area",
    polar: true,
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  yAxis: {
    gridLineInterpolation: "polygon",
    maxPadding: 0,
    tickInterval: 1,
    gridZIndex: 4,
    min: 0,
    title: {
      text: "",
    },
    labels: {},
    stackLabels: {
      enabled: false,
    },
  },
  tooltip: {
    xDateFormat: "%d/%m/%Y",
    shared: true,
    split: false,
    enabled: true,
  },
  plotOptions: {
    series: {
      events: {},
      trackByArea: true,
      pointPadding: 0,
      groupPadding: 0,
      borderWidth: 0.5,
      lineWidth: 0,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
    column: {
      stacking: "normal",
      dataLabels: {
        enabled: false,
      },
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    visible: false,
    crosshair: {
      enabled: true,
    },
  },
  series: [],
});

const customiseOptions = (options, data, styles) => {
  options.series = data.series;
  options.xAxis.categories = data.categories;
  options.yAxis.labels.style = {
    textOutline: "1px contrast",
    color: "white",
  };
  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;
};

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.events.click = function (event) {
    const serie = {
      name: event.point.series.name,
      value: event.point.y,
      category: event.point.category,
    };
    callBackMethods.serieClickedHandler(serie);
  };

  options.xAxis.crosshairHoveredHandler = function (category) {
    callBackMethods.hoverHandler(category);
  };
};

let crosshairTimeout;

export const handleCrosshairHover = function (proceed, e) {
  const axis = this;
  proceed.apply(axis, Array.prototype.slice.call(arguments, 1));
  if (!!axis.options.crosshairHoveredHandler) {
    const category = axis.chart.hoverPoint.category;
    clearTimeout(crosshairTimeout);
    crosshairTimeout = setTimeout(() => {
      axis.options.crosshairHoveredHandler(category);
    }, 100);
  }
};
