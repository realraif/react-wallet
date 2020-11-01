import React from "react";

import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";
import SankeyDiagram from "components/charts/SankeyDiagramHighcharts/SankeyDiagramHighcharts";

const BudgetSankey = ({ data, height }) => {
  if (!data) return null;

  return (
    <WithBox>
      <SankeyDiagram
        data={data}
        height={400}
      />
    </WithBox>
  );
};

export default withSection(BudgetSankey, "Budget Flow");
