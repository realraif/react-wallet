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
  title: {
    text: "HighMap Test"
  },
  plotOptions: {
    map: {
      states: {
        hover: {
          color: "#EEDD66"
        }
      }
    }
  },
  colorAxis: {
    min: 0,
    minColor: "#E6E7E8",
    maxColor: "#005645"
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },

  subtitle: {
    text: "USA",
    floating: true,
    align: "right",
    y: 50,
    style: {
      fontSize: "16px"
    }
  },
  series: [
    {
      mapData: mapData,
      name: "USA",
      dataLabels: {
        enabled: true,
        format: "{point.name}"
      }
    }
  ],
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom"
    }
  }
});

const customiseOptions = (options, data, styles) => {
  options.chart.height = styles.height || 200;
  options.series[0].data = data;
};
