export default (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  setEvents(options, callBackMethods);
  return options;
};

const getGenericOptions = () => ({
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  chart: {
    type: "area",
    zoomType: "x",
    plotBorderColor: "rgb(20, 179, 239)",
    panning: false,
    spacingRight: 1,
    spacingLeft: -32,
  },
  navigator: {
    enabled: true,
    outlineWidth: 0,
    height: 29,
    series: {
      id: "nav",
      data: [],
      type: "area",
      fillColor: "rgba(227, 230, 230, 0.9)",
      lineWidth: 0,
    },
    margin: 10,
    maskFill: "rgba(129, 197, 223, 0.34902)",
    adaptToUpdatedData: true,
    handles: {
      backgroundColor: "rgb(1, 173, 238)",
      borderColor: "rgb(1, 173, 238)",
    },
    xAxis: {
      // navigator xAxis
      startOnTick: true,
      showLastLabel: false,
      tickPixelInterval: 120,
      gridLineColor: "#d6d6d6",
      gridLineWidth: 1,
      dateTimeLabelFormats: {
        month: "%b",
        day: "%b %e",
      },
      labels: {
        align: "left",
        x: 0,
        y: 11,
        style: {
          fontFamily: "Roboto",
        },
      },
    },
    yAxis: {
      // navigator yAxis
      reversed: false,
    },
  },

  xAxis: {
    startOnTick: false,
    endOnTick: false,
    minPadding: 0,
    tickWidth: 0,
    minorTickWidth: 0,
    minorGridLineWidth: 0,
    tickPixelInterval: 160,

    type: "datetime",
    minRange: 24 * 3,
    dateTimeLabelFormats: {
      month: "%e",
      week: "%e %b",
      day: "%a, %e %b",
      hour: "%l %p",
    },
    labels: {
      step: 1,
      align: "left",
      x: 5,
      y: 18,
      style: {
        font: "12px Roboto",
        fontWeight: "normal",
      },
      formatter: function () {},
    },
    events: {
      setExtremes: function (e) {}, // on navigator moved
    },
  },
  yAxis: [
    {
      title: {
        text: "Impr.",
        rotation: 0,
        y: 53,
        x: 24,
        style: {
          font: "12px Roboto",
          color: "#999999",
        },
      },
      lineWidth: 1,
      tickPixelInterval: 30,
      lineColor: "#CCCCCC",
      opposite: false,
      labels: {
        x: -10,
        style: {
          font: "12px Roboto",
          color: "#999999",
        },
      },
      gridLineColor: "transparent",
      floor: 0,
    },
    {
      opposite: true,
      lineWidth: 1,
      lineColor: "#CCCCCC",
    },
  ],
  tooltip: {
    zIndex: 99999,
    crosshairs: false,
    useHTML: true,
    enabled: true,
    backgroundColor: "#FFF",
    borderRadius: 0,
    borderWidth: 0,
    style: {
      padding: "0",
      margin: 0,
    },
    shared: false,
    formatter: function () {},
  },
  plotOptions: {
    series: {
      fillOpacity: 0.4,
      events: {
        legendItemClick: function (e) {},
      },
      marker: {
        symbol: "circle",
        radius: 3,
        fillColor: null, // inherit from series
        lineColor: null,
        lineWidth: 0,
      },
      cursor: "pointer",
      lineColor: "rgb(0, 173, 238)",
      lineWidth: 2,
      animation: {
        duration: 900,
      },
      states: {
        hover: {
          enabled: true,
          lineWidthPlus: 2,
        },
      },
      point: {
        events: {
          mouseOver: function (e) {},
          mouseOut: function () {},
        },
      },
    },
  },

  scrollbar: {
    enabled: false,
  },
  rangeSelector: {
    enabled: false,
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "",
  },
});

const customiseOptions = (options, data, styles) => {
  options.series = data;
  // options.chart.height = styles.height;
};
