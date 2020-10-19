import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBudget } from "./budgetSlice";
import { Grid } from "@material-ui/core";
import BudgetSankey from "./BudgetSankey/BudgetSankey";
import CategoriesSection from "./CategoriesSection/CategoriesSection";

const BudgetScreen = ({ timeFrame, ...props }) => {
  const dispatch = useDispatch();
  const budgetData = useSelector((state) => state.budget);

  useEffect(() => {
    dispatch(fetchBudget());
  }, [dispatch]);

  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <BudgetSankey data={budgetData.budgetSankey} />
      </Grid>
      <Grid item>
        <CategoriesSection budgetData={budgetData} />
      </Grid>
    </Grid>
  );
};

export default BudgetScreen;