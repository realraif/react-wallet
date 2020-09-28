import { loopIndexValue } from "utils";

const defaultDiameter = 200;

export default (data, callBackMethods, styles) => {
  const options = getGenericOptions();
  // customiseOptions(options, data, styles);
  // setEvents(options, callBackMethods);
  return options;
};

const getGenericOptions = () => ({
  chart: {
    type: "column",
    polar: true,
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  xAxis: {
    labels: {
      enabled: false,
    },
    visible: false,
    categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
  },
  yAxis: {
    plotLines: [
      {
        zIndex: 4,
        color: "red",
        width: 1,
        value: 8,
      },
    ],
    tickInterval: 2,
    gridZIndex: 4,
    min: 0,
    title: {
      text: "",
    },
    labels: {
      style: {
        textOutline: "1px contrast",
        color: "white",
      },
    },
    stackLabels: {
      enabled: false,
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
  },
  plotOptions: {
    series: {
      pointPadding: 0,
      groupPadding: 0,
      borderWidth: 0.5,
      shadow: true,
    },
    column: {
      stacking: "normal",
      dataLabels: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: "John",
      data: [5, 3, 4, 7, 2],
    },
    {
      name: "Jane",
      data: [2, 2, 3, 2, 1],
    },
    {
      name: "Joe",
      data: [3, 4, 4, 2, 5],
    },
  ],
});

const customiseOptions = (options, data, styles) => {
  options.series = [{ data: data, allowDrillToNode: true }];

  if (styles.colors) {
    setColors(options.series[0].data, styles.colors);
  }
  if (styles.borderColor) {
    options.plotOptions.series.borderColor = styles.borderColor;
  }

  options.chart.height = styles.diameter || defaultDiameter;
  options.chart.width = styles.diameter || defaultDiameter;
};

const setEvents = (options, callBackMethods) => {
  options.plotOptions.series.point.events.select = function (event) {
    setTimeout(() => {
      const selectedSlices = this.series.chart.getSelectedPoints();
      callBackMethods.sliceClicked(selectedSlices);
    });
  };
};

const setColors = (data, colors) => {
  let colorIndex = 0;

  data.forEach((slice) => {
    if (!slice.parent) {
      slice.color = colors[colorIndex];
      colorIndex = loopIndexValue(colorIndex, colors.length - 1);
    }
  });
};
