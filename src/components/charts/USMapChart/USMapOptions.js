import mapData from "@highcharts/map-collection/countries/us/us-all.geo.json";
import React from "react";
import ReactDOM from "react-dom";
import Tooltip from "./USMapTooltip";

export default (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
  setEvents(options, callBackMethods);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    backgroundColor: null,
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
    map: mapData,
  },
  plotOptions: {
    series: {
      events: {},
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
    },
  },
  tooltip: {
    enabled: true,
    useHTML: true,
    formatter: function (e) {
      const expense = this.point.value;

      const container = document.createElement("div");
      ReactDOM.render(
        <Tooltip
          stateName={this.point.name}
          totalExpenses={expense}
          cards={this.point.info}
        />,
        container
      );
      return container.innerHTML;
    },
  },
  // colorAxis: {
  //   maxColor: "#000fb0",
  //   minColor: "#e3e5ff",
  // },

  credits: {
    enabled: false,
  },
  title: {
    text: "",
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "USA",
      borderColor: "#dcdcdc",
      borderWidth: 0.5,
      showInLegend: false,
      allowPointSelect: false,
      states: {
        hover: { color: "blue", brightness: 0 },
        select: {
          borderColor: "#B5ACFF",
          color: "#B5ACFF",
        },
      },
    },
  ],
});

const customiseOptions = (options, data, styles) => {
  options.chart.height = styles.height || 200;
  options.series[0].data = [...data];
};

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.events.click = function (event) {
    if (!callBackMethods.mapClicked) return;

    const { value, name, info } = event.point;
    const state = { value, name, info, code: event.point["hc-key"] };
    setTimeout(() => {
      callBackMethods.mapClicked(state);
    });
  };
};
