import mapData from "@highcharts/map-collection/countries/us/us-all.geo.json";

export default (data, styles) => {
  const options = getGenericOptions();
  customiseOptions(options, data, styles);
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
      events: {
        click: function () {
          debugger;
        },
      },
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
      },
    },
  },
  tooltip: false,
  colorAxis: [
    {
      minColor: "#000fb0",
      maxColor: "#e3e5ff",
    },
  ],
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
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF",
        },
      },
    },
  ],
});

const customiseOptions = (options, data, styles) => {
  options.chart.height = styles.height || 200;
  options.series[0].data = data;
};
