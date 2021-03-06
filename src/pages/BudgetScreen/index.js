import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBudget, onDestroy } from "./budgetSlice";
import { Grid } from "@material-ui/core";
import BudgetSankey from "./BudgetSankey";
import CategoriesSection from "./CategoriesSection/CategoriesSection";

const BudgetScreen = ({ timeFrame, ...props }) => {
  const [selectedCategoryType, setSelectedCategoryType] = useState("incomes");
  const dispatch = useDispatch();
  const budgetData = useSelector((state) => state.budget);

  const changeCategoryType = (categoryType) => {
    setSelectedCategoryType(categoryType);
  };

  useEffect(() => {
    dispatch(fetchBudget(timeFrame));
  }, [dispatch, timeFrame]);

  useEffect(
    () => () => {
      dispatch(onDestroy());
    },
    [dispatch]
  );

  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <CategoriesSection
          budgetData={budgetData}
          selectedCategoryType={selectedCategoryType}
          handleTabChange={changeCategoryType}
        />
      </Grid>
      <Grid item>
        <BudgetSankey
          data={budgetData.budgetSankey}
          selectedCategoryType={selectedCategoryType}
          selectedCategory={budgetData.selectedCategory}
        />
      </Grid>
    </Grid>
  );
};

export default BudgetScreen;
