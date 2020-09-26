import React from "react";
import { Grid } from "@material-ui/core";
import CategoryExpensesChart from "./CategoryExpensesChart/CategoryExpensesChart";

const CreditCards = ({ timeFrame, ...props }) => {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <CategoryExpensesChart />
      </Grid>
    </Grid>
  );
};

export default CreditCards;
