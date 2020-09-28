import React from "react";
import { Grid } from "@material-ui/core";
import BudgetSankey from "./BudgetSankey/BudgetSankey";
import CategoriesSection from "./CategoriesSection/CategoriesSection";

const BudgetScreen = ({ timeFrame, ...props }) => {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <BudgetSankey />
      </Grid>
      <Grid item>
        <CategoriesSection />
      </Grid>
    </Grid>
  );
};

export default BudgetScreen;
