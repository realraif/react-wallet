import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBudget, onDestroy } from "./budgetSlice";
import { Grid } from "@material-ui/core";
import BudgetSankey from "./BudgetSankey";
import CategoriesSection from "./CategoriesSection/CategoriesSection";

const BudgetScreen = ({ timeFrame, ...props }) => {
  const dispatch = useDispatch();
  const budgetData = useSelector((state) => state.budget);

  useEffect(() => {
    dispatch(fetchBudget());
    return () => {
      dispatch(onDestroy());
    }
  }, [dispatch]);

  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <CategoriesSection budgetData={budgetData} />
      </Grid>
      <Grid item>
        <BudgetSankey data={budgetData.budgetSankey} selectedCategory={budgetData.selectedCategory} />
      </Grid>
    </Grid>
  );
};

export default BudgetScreen;
