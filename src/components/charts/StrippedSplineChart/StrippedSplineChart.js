import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import genericOptions from './chartOptions';

function setLastItemOptions(data) {
  var yValue = data.pop();
  var lastItem = {
    y: yValue,
    marker: {
      fillColor: '#FFFFFF',
      radius: 5,
      enabled: true
    }
  }
  data.push(lastItem);
  return data;
}

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

const StrippedSplineChart = ( props ) => {
  var data = setLastItemOptions(props.data);
  var lineColor = props.color ? props.color : "#4572A7";
  var lightColor = ColorLuminance(lineColor, 0.2);
  var lighterColor = ColorLuminance(lineColor, 0.4);
  var whiteColor = ColorLuminance(lineColor, 1);

  var options = {
    ...genericOptions,
    series: [{
      ...genericOptions.series[0],
      data: data,
      fillColor: {
        linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
        stops: [
          [0, Highcharts.color(lighterColor).setOpacity(0.3).get()],
          [1, Highcharts.color(whiteColor).setOpacity(0.001).get()]
        ]
      },
      color: {
        linearGradient: { x1: 1, x2: 0, y1: 1, y2: 1 },
        stops: [
          [0, lightColor],
          [1, lineColor]
        ]
      }
    }],
    plotOptions : {
      ...genericOptions.plotOptions,
      series: {
        ...genericOptions.plotOptions.series,
        color: lineColor,
        marker: {
          ...genericOptions.plotOptions.series.marker,
          lineColor: lightColor
        }
      }
    }
  };
  if (props.height) {
    options.chart.height = props.height;
  }
  
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
  );
};


export default StrippedSplineChart;
