import mapData from "@highcharts/map-collection/countries/us/us-all.geo.json";

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
  tooltip: true,
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
      mapData: mapData,
      borderColor: "#dcdcdc",
      borderWidth: 0.5,
      showInLegend: false,
      allowPointSelect: true,
      states: {
        hover: { color: null, brightness: 0 },
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
    const { value, name, data } = event.point;
    const state = { value, name, data, code: event.point["hc-key"] };
    setTimeout(() => {
      callBackMethods.mapClicked(state);
    });
  };
};
