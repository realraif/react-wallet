import React from "react";

import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";
import SankeyDiagram from "components/charts/SankeyDiagram/SankeyDiagram";

const BudgetSankey = ({ data, selectedCategory, selectedCategoryType }) => {
  if (!data) return null;

  return (
    <WithBox>
      <SankeyDiagram
        selectedLink={selectedCategory}
        selectedCategoryType={selectedCategoryType}
        data={data}
        height={350}
      />
    </WithBox>
  );
};

export default withSection(BudgetSankey, "Budget Flow");
