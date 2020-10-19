import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { fetchDashboard } from "./dashboardSlice";
import Balances from "./Balances/BalancesSection";
import CreditCards from "./CreditCardsSection/CreditCardsSection";
import ExpensesSection from "./Expenses/ExpensesSection";

const Dashboard = ({ timeFrame, ...props }) => {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <Balances data={dashboard.balancesTrend} />
      </Grid>
      <Grid item>
        <CreditCards data={dashboard.creditCards} />
      </Grid>
      <Grid item>
        <ExpensesSection dashboardData={dashboard} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;