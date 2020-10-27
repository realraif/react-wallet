import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import BalanceCard from "./BalanceCard/BalanceCard";
import withSection from "HOC/withSection";

const tempTimeFrame = "this week";

const Balances = ({ data, selectedCards }) => {
  const theme = useTheme();
  const color = theme.charts.colors[2];
  const isSelected = selectedCards.map((card) => card.parentId || card.id);
  
  if (!data) return null;

  return (
    <Grid container justify="space-between" spacing={6} alignItems="center">
      {data.map((balance, index) => (
        <Grid item xs={12} md={6} lg={4} key={balance.id}>
          <BalanceCard
            balanceTrend={balance.trend}
            accountID={balance.id}
            currency={balance.currency}
            isSelected={isSelected.includes(balance.id)}
            color={color}
            timeFrameText={tempTimeFrame}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withSection(Balances, "balances");
