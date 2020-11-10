export const removeAllSeries = (chartComponent) => {
  if (!chartComponent) return;
  const series = chartComponent.chart.series;
  while (series.length) {
    series[0].remove();
  }
};

export const removePlotband = (chartComponent, id, range) => {
  if (!chartComponent) return;
  chartComponent.chart.xAxis[0].removePlotBand(id);
  if (range) {
    chartComponent.chart.xAxis[0].addPlotBand({
      from: range.min,
      to: range.max,
      id,
    });
  }
};
