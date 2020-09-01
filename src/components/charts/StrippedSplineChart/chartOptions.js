
export default () => ({
  chart: {
    spacing: [0, 0, 0, 0],
    margin: [0, 40, 0, 0]
  },
  credits: {
      enabled: false
  },
  title: {
    text: ''
  },
  tooltip: {
      enabled: false
  },
  legend: {
  	enabled: false
  },
  yAxis: {
      visible: false,
      endOnTick: false
  },
  xAxis: {
      visible: false
  },
  plotOptions: {
    series: {
      lineWidth: 3,
      marker: {
        lineWidth: 3,
        radius: 1,
        lineColor: null, // inherit from series
        enabled: false
      }
    }
  },
  series: [{
    type: 'areaspline',
    data: []
  }]
});
