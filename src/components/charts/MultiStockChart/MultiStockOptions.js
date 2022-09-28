import React from "react";
import ReactDOM from "react-dom";

const multiStockOptions = (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  setEvents(options, callBackMethods);
  return options;
};

const Tooltip = ({ name, value }) => (
  <>
    {name}: {value}
  </>
);

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
    height: 400,
    backgroundColor: "transparent",
    events: {
      load: function () {
        this.navigator.handles.forEach((handle) => {
          handle.attr({
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
          });
        })
      },
    },
  },
  navigator: {
    enabled: true,
    outlineWidth: 0,
    series: {
      id: "nav",
      type: "area",
      fillColor: "rgba(227, 230, 230, 0.9)",
      lineWidth: 0,
    },
    margin: 10,
    adaptToUpdatedData: true,
    handles: {
      height: 10,
      width: 2,
      lineWidth: 5,
      linecap: 3,
      backgroundColor: "rgb(1, 173, 238)",
      borderColor: "rgb(1, 173, 238)",
    },
    xAxis: {
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
      // formatter: function () {},
    },
    events: {
      setExtremes: function (e) {}, // on navigation move
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
    formatter: function (e) {
      const container = document.createElement("div");
      ReactDOM.render(
        <Tooltip name={this.series.name} value={this.y} />,
        container
      );
      return container.innerHTML;
    },
  },
  plotOptions: {
    series: {
      fillOpacity: 0.4,
      events: {
        legendItemClick: function (e) {},
      },
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 3,
        lineColor: null, // inherit from series
        lineWidth: 0,
      },
      cursor: "pointer",
      lineWidth: 0,
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
          mouseOut: function (e) {},
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

const getSerie = ({ name, data, color }) => ({
  name: name,
  data: data,
  color: color,
  lineWidth: 0,
  showInNavigator: true,
});

const customiseOptions = (options, data, styles) => {
  options.series = data.map((serie) => {
    return getSerie(serie);
  });
};

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.events.mouseOver = function (event) {
    callBackMethods.serieClickedHandler(event.target.name);
  };
};

export default multiStockOptions;
