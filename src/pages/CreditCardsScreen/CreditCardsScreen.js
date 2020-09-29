import React from "react";
import { Grid } from "@material-ui/core";
import CategoryExpensesChart from "./CategoryExpensesChart/CategoryExpensesChart";
import SelectCreditCardSection from "./SelectCreditCardSection/SelectCreditCardSection";

const CreditCards = ({ timeFrame, ...props }) => {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <SelectCreditCardSection />
      </Grid>
      <Grid item>
        <CategoryExpensesChart />
      </Grid>
    </Grid>
  );
};

export default CreditCards;
