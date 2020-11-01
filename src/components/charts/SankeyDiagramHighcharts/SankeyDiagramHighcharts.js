import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import sankey from "highcharts/modules/sankey";
import getChartOptions from "./SankeyDiagramOptions";
sankey(Highcharts);

const SankeyDiagram = ({
  data,
  colors,
  height,
  chartRef,
}) => {

  const options = getChartOptions(data, { colors, height });

  return (
    <div className="ChartContainer">
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default React.memo(SankeyDiagram);
