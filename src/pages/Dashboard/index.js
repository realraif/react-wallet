import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { fetchDashboard, onDestroy } from "./dashboardSlice";
import Balances from "./Balances/BalancesSection";
import CreditCards from "./CreditCardsSection/CreditCardsSection";
import ExpensesSection from "./Expenses/ExpensesSection";
import { addToSelectedCards, removeFromSelectedCards } from "./dashboardSlice";

const Dashboard = ({ timeFrame, ...props }) => {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboard(timeFrame));
    return () => {
      dispatch(onDestroy());
    };
  }, [dispatch, timeFrame]);

  const toggleSelection = (isSelected, card) => {
    if (isSelected) {
      dispatch(removeFromSelectedCards({ card }));
    } else {
      dispatch(addToSelectedCards({ card }));
    }
  };

  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <Balances
          toggleSelection={toggleSelection}
          timeFrame={timeFrame}
          data={dashboard.balances}
          selectedCards={dashboard.selectedCards}
        />
      </Grid>
      <Grid item>
        <CreditCards
          toggleSelection={toggleSelection}
          data={dashboard.balances}
          selectedCards={dashboard.selectedCards}
        />
      </Grid>
      <Grid item>
        <ExpensesSection dashboardData={dashboard} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
