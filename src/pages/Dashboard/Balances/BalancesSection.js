import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import BalanceCard from "./BalanceCard/BalanceCard";
import withSection from "HOC/withSection";

const tempTimeFrame = "this week";

export const Balances = ({ data, selectedCards, toggleSelection }) => {
  const theme = useTheme();
  const colors = theme.charts.colors;

  const areCardsSelected = selectedCards.map(
    (card) => card.parentId || card.id
  );

  if (!data) return null;

  return (
    <Grid container justify="space-between" spacing={2} alignItems="center">
      {data.map((balance, index) => (
        <Grid item xs={12} md={6} lg={4} key={balance.id}>
          <BalanceCard
            balanceTrend={balance.trend}
            accountID={balance.id}
            currency={balance.currency}
            isSelected={areCardsSelected.includes(balance.id)}
            color={colors[index]}
            timeFrameText={tempTimeFrame}
            toggleSelection={(isSelected) => {
              toggleSelection(isSelected, balance);
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withSection(Balances, "balances");
