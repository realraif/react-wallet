import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import BalanceCard from "./BalanceCard";
import withSection from 'HOC/withSection';

const balancesData = [
  {
    id: "DE89 3704 0044 0532 0130 00",
    trend: [1, 3, 4, 5, 2, 7, 2, 1, 4, 3, 1, 3, 4],
    currency: "USD",
  },
  {
    id: "DE89 3704 0044 0532 0130 01",
    trend: [6, 5, 1, 1, 3, 2, 4, 6, 2, 2, 1, 4, 1],
    currency: "USD",
  },
  {
    id: "DE89 3704 0044 0532 0130 02",
    trend: [1, 2, 1, 4, 3, 1, 2, 1, 2, 1, 3, 4, 6],
    currency: "USD",
  },
];

const tempTimeFrame = "this week";

const Balances = (props) => {
  const theme = useTheme();
  const colors = theme.charts.colors;

  return (
    <Grid container justify="space-between" spacing={6} alignItems="center">
      {balancesData.map((balance, index) => (
        <Grid item xs={12} md={6} lg={4} key={balance.id}>
          <BalanceCard
            balanceTrend={balance.trend}
            accountID={balance.id}
            currency={balance.currency}
            color={colors[index]}
            timeFrameText={tempTimeFrame}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withSection(Balances, "balances");
