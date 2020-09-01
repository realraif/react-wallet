import React from "react";
import { Grid } from "@material-ui/core";
import SplineChart from "components/charts/StrippedSplineChart/StrippedSplineChart";
import BalanceCard from "./BalanceCard";

const colors = ["#a275d0", "#559e55", "#75bad0"];

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

const Balances = (props) => {
  return (
    <Grid container justify="space-around" alignItems="center">
      {balancesData.map((balance, index) => (
        <Grid item xs={3} key={balance.id}>
          <BalanceCard
            balanceTrend={balance.trend}
            accountID={balance.id}
            currency={balance.currency}
            color={colors[index]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Balances;
