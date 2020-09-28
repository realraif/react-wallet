import React from "react";

import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";
import SankeyDiagram from "components/charts/SankeyDiagram/SankeyDiagram";

import data from "./mockdata";

const BudgetSankey = ({ height }) => {

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
