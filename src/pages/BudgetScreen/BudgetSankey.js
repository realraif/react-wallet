import React from "react";

import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";
import SankeyDiagram from "components/charts/SankeyDiagramHighcharts/SankeyDiagramHighcharts";

const BudgetSankey = ({ data, selectedCategory }) => {
  if (!data) return null;

  return (
    <WithBox>
      <SankeyDiagram
        selectedCategory={selectedCategory}
        data={data}
        height={350}
      />
    </WithBox>
  );
};

export default withSection(BudgetSankey, "Budget Flow");
