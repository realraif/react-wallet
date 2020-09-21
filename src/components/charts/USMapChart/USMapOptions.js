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
    },
    mapbubble: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      marker: {
        lineWidth: 1,
        states: {
          select: {
            lineWidth: 2,
            lineColor: "pink",
          },
        },
      },
    },
  },
  colorAxis: [
    {
      minColor: "#000fb0",
      maxColor: "#e3e5ff",
    },
    {
      minColor: "#2f732e",
      maxColor: "#8bb58a",
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
      data: [
        {
          code3: "FRA",
          code: "FR",
        },
      ],
      name: "Countries",
      nullColor: "#eae2e2",
      color: "#a4edba",
      borderWidth: 0,
      joinBy: ["iso-a2", "code"],
      states: {
        hover: {
          color: "#a4edba",
        },
      },
      tooltip: {
        valueSuffix: "/km²",
      },
      enableMouseTracking: true,
    },
  ],
});

const genericSeries = {
  type: "mapbubble",
  joinBy: ["iso-a3", "code3"],
  minSize: 4,
  maxSize: "12%",
  tooltip: {
    pointFormatter: function () {
      var amount = this.z.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return `${this.name}: ${amount}`;
    },
  },
};

const customiseOptions = (options, data, styles) => {

  options.chart.height = styles.height || 200;

  const bubbleSeriesList = setBubbleSeriesList(props.seriesList || []);
  options.series = [...options.series, ...bubbleSeriesList]
};

function setBubbleSeriesList(seriesList) {
  return seriesList.map(function (series, i) {
    return {
      ...genericSeries,
      colorAxis: i,
      name: series.name,
      data: series.data,
    };
  });
}
