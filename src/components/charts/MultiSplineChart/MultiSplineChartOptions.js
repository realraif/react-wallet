export const getChartDatasets = (dataSeries) => {
  return dataSeries.map((series) => {
    return getDatasetOptions(series);
  });
};

export const options = {
  scales: {
    yAxes: [
      {
        gridLines: {
          borderDash: [8, 4],
        },
      },
    ],
  },
};

const getDatasetOptions = (series) => ({
  label: series.name,
  data: series.data,
  lineTension: 0.2,
  backgroundColor: "rgba(75,192,192,0.4)",
  borderColor: "rgba(75,192,192,1)",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderColor: "rgba(75,192,192,1)",
  pointBackgroundColor: "#fff",
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: "rgba(75,192,192,1)",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
});
