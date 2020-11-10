import React, { useState } from "react";
import { Grid, Tabs, Tab } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import WithBox from "HOC/withBox";

import ExpensesPolarChart from "./ExpensesPolarChart";
import ExpensesBarChart from "./ExpensesBarChart";

const CategoriesSection = ({ budgetData }) => {
  const theme = useTheme();
  const [categoriesType, setcategoriesType] = useState("incomes");

  const handleTabChange = (event, tabValue) => {
    setcategoriesType(tabValue);
  };

  const height = theme.sections.overview.expenses.height;

  return (
    <WithBox>
      <Grid container justify="space-between" spacing={0} alignItems="center">
        <Grid item xs={12}>
          <Tabs
            value={categoriesType}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Incomes" value="incomes" />
            <Tab label="Expenses" value="expenses" />
          </Tabs>
        </Grid>
        <Grid item xs={12} lg={9}>
          <ExpensesBarChart
            data={budgetData.barChart}
            height={height}
            category={categoriesType}
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ExpensesPolarChart
            data={budgetData.budgetPolarChart}
            height={height}
            category={categoriesType}
          />
        </Grid>
      </Grid>
    </WithBox>
  );
};

export default withSection(CategoriesSection);
