import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import Balances from "./Balances/BalancesSection";
import CreditCards from "./CreditCardsSection/CreditCardsSection";
import ExpensesSection from "./Expenses/ExpensesSection";
import { DASHBOARD_LOADED, DASHBOARD_DESTROYED } from "constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: DASHBOARD_LOADED, payload }),
  onDestroy: () => dispatch({ type: DASHBOARD_DESTROYED }),
});

const Dashboard = ({ timeFrame, ...props }) => {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <Balances />
      </Grid>
      <Grid item>
        <CreditCards />
      </Grid>
      <Grid item>
        <ExpensesSection />
      </Grid>
    </Grid>
  );
};

export default connect(null, mapDispatchToProps)(Dashboard);
