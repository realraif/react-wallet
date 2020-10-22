export const removeAllSeries = (chartComponent) => {
  if (!chartComponent) return;
  const series = chartComponent.chart.series;
  while (series.length) {
    series[0].remove();
  }
};
