import React from "react";
import { Grid, Tabs, Tab } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import WithBox from "HOC/withBox";

import ExpensesPolarChart from "./ExpensesPolarChart";
import ExpensesBarChart from "./ExpensesBarChart";

const CategoriesSection = ({
  budgetData,
  selectedCategoryType,
  handleTabChange,
}) => {
  const theme = useTheme();
  const height = theme.sections.overview.expenses.height;

  return (
    <WithBox>
      <Grid container justify="space-between" spacing={0} alignItems="center">
        <Grid item xs={12}>
          <Tabs
            value={selectedCategoryType}
            onChange={(event, tabValue) => handleTabChange(tabValue)}
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
            categoryType={selectedCategoryType}
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ExpensesPolarChart
            data={budgetData.budgetPolarChart}
            height={height}
            categoryType={selectedCategoryType}
          />
        </Grid>
      </Grid>
    </WithBox>
  );
};

export default withSection(CategoriesSection);
